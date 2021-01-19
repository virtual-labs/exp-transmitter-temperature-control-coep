//var TC_CALIBRATION = TC_CALIBRATION || {};

//TC_CALIBRATION.TC_calibrationFun = function(lowerSpLevel, higherSpLevel, TColdreading, TCarr_actualVal, TCarr_stdVal) {
	
	 TC_calibrationFun = function(lowerSpLevel, higherSpLevel, TColdreading, TCarr_actualVal, TCarr_stdVal) {
	
//	console.log("TC_CALIBRATION");

	
//	 console.log("arr true reading not sorted "+TColdreading);
//	 console.log("arr Actual values not  sorted"+TCarr_actualVal);
//	 console.log("arr Standard values not sorted"+TCarr_stdVal);
	var zeroErrCnt = 0, spanErrCnt = 0, linearityAlgo1Cnt = 0, linearityAlgo2Cnt = 0,linearityAlgo3Cnt  = 0;
	 var TColdreadingSorted = [];
	 var TCarr_actualValSorted = [];
	 var TCarr_stdValSorted = [];
	 
	 TColdreadingSorted = TColdreading.slice();
	 TColdreadingSorted.sort(function(a, b) {
			return a - b
		});
	 //console.log("arr true reading sorted "+TColdreadingSorted);
	 
	 for(var i = 0; i<TColdreadingSorted.length; i++){
		 
		 var index = TColdreading.indexOf(TColdreadingSorted[i]);
		 var value = TCarr_actualVal[index];
		 TCarr_actualValSorted.push(value);
		 var value2 = TCarr_stdVal[index];
		 TCarr_stdValSorted.push(value2);
	 }
	 //console.log("arr Actual values sorted"+TCarr_actualValSorted);
	 //console.log("arr Standard values sorted"+TCarr_stdValSorted);
	
	
	var TCCalibrationData = {};
	 var positiveVal = [];
	 var negativeVal = [];
	 var negativeValueIndex =  [];
	 var positiveValueIndex = [];
	 var checkVals = [];
	 var checkDiffVals = [];
	
	$("#TC_calibration").prop("hidden", true);
	$("#TC_graph").prop("hidden", true);
	$("#submit_TC_WaterLevel").prop("hidden", true);
	$("#TC_Slider").prop("hidden", true);
	
	var TC0Err_cnt = 0 , TCSpanErr_cnt = 0, TC_LinearityErr_cnt = 0, TC_AccuracyErr_cnt = 0;
	
	var TC_calibrationData = '';
	TC_calibrationData += '<div class="col-md-12" >'
			+ '<div id="TC_calibrationDiv" >'
			+ '<h1>TT Calibration</h1>'
			+'<h6>In this level calibrate the TT 100</h6>'
			+ '<div class="col-md-10 col-md-offset-1" id="TC_Calibration_Input">'

			+ '<div class="col-md-12 marg" id="TCzeroerror_Calibration">'
			+ '<label for="zeroerror" class="col-md-4" style="margin-top:5px">Zero Error:</label>'
			+ '<input type="text" class=" col-md-4" id="zeroerror" placeholder="Enter Zero Error " name="zeroerror" style="padding:5px">'
			+ '<button type="submit" id="submit_TCzeroerror_Calibration"  data-toggle="modal" data-target="#calibrationmyModal" class="submit_TC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="zeroerrorOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="TCspanerror_Calibration" hidden>'
			+ '<label for="spanerror" class="col-md-4" style="margin-top:5px">Span Error:</label>'
			+ '<input type="text" class="col-md-4" id="spanerror" placeholder="Enter Span Error " name="spanerror" style="padding:5px">'
			+ '<button type="submit" id="submit_TCspanerror_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_TC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="spanerrorOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="TCLinearity_Calibration" hidden>'
			+ '<label for="linearity" class="col-md-4" style="margin-top:5px">Linearity:</label>'
			+ '<input type="text" class="col-md-4" id="linearity" placeholder="Enter Linearity " name="Linearity" style="padding:5px">'
			+ '<button type="submit" id="submit_TCLinearity_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_TC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="TCLinearityOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="TCAccuracy_Calibration" hidden>'
			+ '<label for="Accuracy" class="col-md-4" style="margin-top:5px">Average Accuracy (%):</label>'
			+ '<input type="text" class="col-md-4" id="Accuracy" placeholder="Enter Accuracy(%) " name="Accuracy" style="padding:5px">'
			+ '<button type="submit" id="submit_TCAccuracy_Calibration" data-toggle="modal" data-target="#calibrationmyModal"  class="submit_TC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="TCAccuracyOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="TC_CalibrationError" hidden>'
			
			+ '</div>'
			// + '<button id="submit_TC_Calibration">Submit</button><br/>'
			+ '<div  id  = "TCCalibQuesDiv"class="col-md-12 " style="margin: 17px 0;" hidden>'
			+ '<i  class="plsCalibrate">Please calibrate the TT</i>'
			+ '<label class="radio-inline"><input type="radio" name="TC_calibrateNeed" id= "TC_calibrateNeeded">Yes</label>'
			
			+ '</div>' 
			+ '</div>'
			+ '</div>'
			+'<div id="ZeroErrorKnotch" class="col-md-6"></div>'
			+'<div id="SpanErrorKnotch" class="col-md-6"></div>'
			+'<div id="LinearityKnotch" class="col-md-12" disabled>'
			+'<div id="LinearityTopKnotch" class="col-md-6" hidden></div>'
			+'<div id="LinearityBottomKnotch" class="col-md-6" hidden></div>'
			+'<div id="LinearityBothKnotch" class="col-md-offset-3 col-md-6" hidden></div>'
			+'</div>'
			+'</div>'


	$('#canvasMainDiv').css("display", "none");
	$('#TestNextDiv').css("display", "block");
	$("#TestNextDiv").html('');
	$("#TestNextDiv").html(TC_calibrationData);

	
	
	
	$('#submit_TCzeroerror_Calibration').on('click', function() {
		$("#submit_TCzeroerror_Calibration").removeAttr("data-toggle");
		$("#submit_TCzeroerror_Calibration").removeAttr("data-target");
		$('#zero4direct').css("display","none");
				
		
		        var TC0Temp = TCarr_actualValSorted[TColdreadingSorted.indexOf(lowerSpLevel)];
		        var TC_ZeroError = TC0Temp - 4;
		        
		      
//								console.log("formula value with 0 error"
//									+ TC0Temp +"ERROR" +TC_ZeroError.toFixed(2));
									        
					if(($("#zeroerror").val() == '') ||  isNaN($("#zeroerror").val())){
						
						alertify.alert("Please Enter The Answer In Numeric Only");
						
					}else{
						

						
						if (TC_ZeroError.toFixed(2) == $("#zeroerror").val()){
							
							TCCalibrationData.tcZeroErr = $("#zeroerror").val();
							TCCalibrationData.tcZeroErrCnt = TC0Err_cnt;
							//console.log(TCCalibrationData);
							
							
							
							TC0Err_cnt = 0;
							
							$("#zeroerror").prop("disabled", true);
							$("#TCspanerror_Calibration").prop("hidden", false);
							$("#submit_TCzeroerror_Calibration").css("display","none");
							$("#zeroerrorOK").css("display","block");
						}else{
							
							if(TC0Err_cnt == 2){
								$("#submit_TCzeroerror_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
								$('#zero4direct').css("display","block");
								TC0Err_cnt++;
//								alertify.alert("Answer is incorrect");
//								alertify.alert("Correct Answer is: " + TC_ZeroError.toFixed(3));
							}else if(TC0Err_cnt == 4){
								
								alertify.alert("Answer is incorrect");
								alertify.alert("Correct Answer is: " + TC_ZeroError.toFixed(2));
							}else{
								
								alertify.alert("Answer is incorrect");
								TC0Err_cnt++;
							}
							
						}
						
					}	
									        
			     
		
	});

	$('#submit_TCspanerror_Calibration').on('click', function() {
	
		$("#submit_TCspanerror_Calibration").removeAttr("data-toggle");
		$("#submit_TCspanerror_Calibration").removeAttr("data-target");
		$('#span4direct').css("display","none");	
		
        var TCSpanTemp = TCarr_actualValSorted[TColdreadingSorted.indexOf(higherSpLevel)];
        var TC_SpanError = TCSpanTemp - 20;
        
      
//						console.log("formula value with 0 error"
//							+ TCSpanTemp +"ERROR" +TC_SpanError.toFixed(2));
							        
			if(($("#spanerror").val() == '') ||  isNaN($("#spanerror").val())){
				
				alertify.alert("Please Enter The Answer In Numeric Only");
				
			}else{
				
				
				if (TC_SpanError.toFixed(2) == $("#spanerror").val()){
					
					TCCalibrationData.tcSpanErr = $("#spanerror").val();
					TCCalibrationData.tcSpanErrCnt = TCSpanErr_cnt;
					//console.log(TCCalibrationData);
					
					
					
					TCSpanErr_cnt = 0; 
					$("#spanerror").prop("disabled", true);
					$("#TCLinearity_Calibration").prop("hidden", false);
					$("#submit_TCspanerror_Calibration").css("display","none");
					$("#spanerrorOK").css("display","block");
				}else{
					if(TCSpanErr_cnt == 2){
						$("#submit_TCspanerror_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#span4direct').css("display","block");
						TCSpanErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + TC_ZeroError.toFixed(3));
					}else if(TCSpanErr_cnt == 4){
						
						alertify.alert("Answer is incorrect");
						alertify.alert("Correct Answer is: " + TC_SpanError.toFixed(2));
					}else{
						
						alertify.alert("Answer is incorrect");
						TCSpanErr_cnt++;
					}
					
				}
				
			}	
				
	        
	 
	});

	$('#submit_TCLinearity_Calibration').on('click', function() {
		$("#submit_TCLinearity_Calibration").removeAttr("data-toggle");
		$("#submit_TCLinearity_Calibration").removeAttr("data-target");
		$('#Linearity4direct').css("display","none");
		// Calulate SX
		  var sumofX = TCarr_stdValSorted.reduce(function(a, b){
		        return a + b;
		    }, 0).toFixed(2);
		    
		  
		    //console.log("Calulate SX");
		  
		    //console.log("Sum of Input " +sumofX);
		    
		    var Sqr_sumofX = Math.pow(sumofX, 2);
		    
		    //console.log("Square of Sum of Input " +Sqr_sumofX);
		    
		    var sum_sq_X =  sum_sq(TCarr_stdValSorted).toFixed(2);
		    
		    //console.log("sum of Square of input " +sum_sq_X);
		    
		    var TC_Sx = Math.sqrt(sum_sq_X - (Sqr_sumofX/TCarr_stdValSorted.length));
		    
		    //console.log("SX " +TC_Sx.toFixed(2));
		    
		
		    
		 // Calulate SY
			  var sumofY = TCarr_actualValSorted.reduce(function(a, b){
			        return a + b;
			    }, 0).toFixed(2);
			    
			    //console.log("Calulate SY");
			    //console.log("Sum of Input " +sumofY);
			    
			    var Sqr_sumofY = Math.pow(sumofY, 2);
			    
			    //console.log("Square of Sum of Input " +Sqr_sumofY);
			    
			    var sum_sq_Y =  sum_sq(TCarr_actualValSorted).toFixed(2);
			    
			    //console.log("sum of Square of input " +sum_sq_Y);
			    
			    var TC_Sy =  Math.sqrt( sum_sq_Y -  (Sqr_sumofY/TCarr_actualValSorted.length));
			    
			    //console.log("SY " +TC_Sy.toFixed(2));
		    
		    
		// CaTCulate Sxy
			    
			    var sum_xy = 0;
			    for (var i=0; i < TCarr_stdValSorted.length; i++) {
			    	sum_xy += (TCarr_stdValSorted[i] * TCarr_actualValSorted[i]);
			    }
			    //console.log("Calulate SXY"); 
			    //console.log("Sum of MultiPlication of X and Y  " +sum_xy.toFixed(2));
			    
	            var multi_x_y = sumofX * sumofY;
			    
	            //console.log("MultiPlication of sum of X and Y  " +multi_x_y.toFixed(2));
	         
	            var Sxy =  sum_xy - (multi_x_y/TCarr_stdValSorted.length) ;
	         
	            //console.log("SXY  " +Sxy.toFixed(2));
	         
	         
	    // CaTCulate Linearity     
	         
	         
	         //console.log("CaTCulate Linearity"); 
	         
	         //console.log("Sqrt Multiplication " + ( TC_Sx.toFixed(2) * TC_Sy.toFixed(2)).toFixed(2)); 
	         
	         var TC_linearity =  Sxy.toFixed(2)/( TC_Sx.toFixed(2) * TC_Sy.toFixed(2));
	        
	         //console.log(" TC_linearity " +TC_linearity.toFixed(3));
	        
	         
		if(($("#linearity").val() == '') ||  isNaN($("#linearity").val())){
				
				alertify.alert("Please Enter The Answer In Numeric Only");
				
			}else{
				
				
				if (TC_linearity.toFixed(3) == $("#linearity").val()){
					
					
					
					TCCalibrationData.tcLinearityErr = $("#linearity").val();
					TCCalibrationData.tcLinearityErrCnt = TC_LinearityErr_cnt;
					//console.log(TCCalibrationData);
					
					
					TC_LinearityErr_cnt = 0; 
					$("#linearity").prop("disabled", true);
					$("#TCAccuracy_Calibration").prop("hidden", false);
					$("#submit_TCLinearity_Calibration").css("display","none");
					$("#TCLinearityOK").css("display","block");
					
				}else{
					if(TC_LinearityErr_cnt == 2){
					$("#submit_TCLinearity_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
					$('#Linearity4direct').css("display","block");
					TC_LinearityErr_cnt++;
//					alertify.alert("Answer is incorrect");
//					alertify.alert("Correct Answer is: " + TC_ZeroError.toFixed(3));
				}else if(TC_LinearityErr_cnt == 4){
						
						alertify.alert("Answer is incorrect");
						alertify.alert("Correct Answer is: " + TC_linearity.toFixed(3));
					}else{
						
						alertify.alert("Answer is incorrect");
						TC_LinearityErr_cnt++;
					}
					
				}
				
			}
	         
	         
	         
	         
		
		
	});

	$('#submit_TCAccuracy_Calibration').on('click', function() {
		$("#submit_TCAccuracy_Calibration").removeAttr("data-toggle");
		$("#submit_TCAccuracy_Calibration").removeAttr("data-target");
		$('#Accuracy4direct').css("display","none");
		    var sum_PerAccuracy = 0;
		    for (var i=0; i < TCarr_stdValSorted.length; i++) {
		    	sum_PerAccuracy += ((TCarr_stdValSorted[i] - TCarr_actualValSorted[i])/TCarr_stdValSorted.length)*100;
		    }
		
		   var Avg_Accuracy = Math.abs(sum_PerAccuracy)/TCarr_stdValSorted.length;
		   
		   //console.log("AVG % Accuracy  " +Avg_Accuracy.toFixed(2));
		   
		   if(($("#Accuracy").val() == '') ||  isNaN($("#Accuracy").val())){
				
				alertify.alert("Please Enter The Answer In Numeric Only");
				
			}else{
				
				
				if (Avg_Accuracy.toFixed(2) == $("#Accuracy").val()){
					
					
					TCCalibrationData.tcAccuracyErr = $("#Accuracy").val();
					TCCalibrationData.tcAccuracyErrCnt = TC_AccuracyErr_cnt;
					
					//console.log(TCCalibrationData);
					
//					ExpTrackData.tcCalibrationData = TCCalibrationData;
					
					//console.log(ExpTrackData);
					
					
					
					
					
					TC_AccuracyErr_cnt = 0; 
					$("#Accuracy").prop("disabled", true);
					$("#TCCalibQuesDiv").prop("hidden", false);
					
					$("#submit_TCAccuracy_Calibration").css("display","none");
					$("#TCAccuracyOK").css("display","block");
				}else{
					if(TC_AccuracyErr_cnt == 2){
						$("#submit_TCAccuracy_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#Accuracy4direct').css("display","block");
						TC_AccuracyErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + TC_ZeroError.toFixed(3));
					}else if(TC_AccuracyErr_cnt == 4){
						
						alertify.alert("Answer is incorrect");
						alertify.alert("Correct Answer is: " + Avg_Accuracy.toFixed(2));
					}else{
						
						alertify.alert("Answer is incorrect");
						TC_AccuracyErr_cnt++;
					}
					
				}
				
			}

	});
	
	
	
	
	

	
	
	
	function sum_sq(array) {
		  var sum = 0, 
		      i = array.length;
		  while (i--) 
		   sum += Math.pow(array[i], 2);
		  return sum;
		}
	
	
	
	$('#TC_calibrateNeeded').on('click', function() {
		
		
		$("#TC_calibrateNeeded").prop("disabled", true);
		
		 var range = $("#zeroerror").val();
		 var flag = 0;
		TCZero_Calibartion(range, flag);
	
	//	 TC_CheckLinearitySection();
		

	});
	
	

	var TCZero_Calibartion = function(range, flag){
		

		

		var TC_calibrateNeeded = '';
		TC_calibrateNeeded += '<div class="col-md-12" >'
			+'<div id="ZeroErrorKnockData">'
			+'<h1>Adjust Zero</h1>'
			+'<div id="plus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"><input type="Text" id="ZeroangleVal" ></div><div id="minus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat1" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="ZeroErrorKnockSuccess"></div>'
			$('#ZeroErrorKnotch').html('');
			$('#ZeroErrorKnotch').html(TC_calibrateNeeded);
			
			
			range = Math.abs(range);
			
			
			var angle = 0;
			var temp  = 0;
//			 var range = $("#zeroerror").val();
			 var ZeroValue_old = TCarr_actualValSorted[0] ;
			 var ZeroValue = TCarr_actualValSorted[0] ;
			 //console.log(ZeroValue);
			 var steps = range/10;
			 var stepFix = steps.toFixed(3);
			 //console.log(steps);
/// Zero MINUS CLICK  
			 
			 $("#ZeroangleVal").val(TCarr_actualValSorted[0]);
			 $('#minus').bind("click",function (event) {
				 zeroErrCnt++;
				 $('#ZeroErrorKnockSuccess').html('');
				 $('#plus').show();
				 if(angle >= -(range)){
					 angle -=stepFix;
					 var n = angle.toFixed(2);
					 //console.log(n);
				      
					 
					ZeroValue = parseFloat((ZeroValue - stepFix).toFixed(2));
					//console.log(ZeroValue);
					if((-range) == n)
						{
						
						TCarr_actualValSorted.splice(0, 1, parseFloat(4));
						//$('#minus').hide();
						//$('#plus').hide();
						  $("#ZeroangleVal").val(TCarr_actualValSorted[0]);
						drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
						
						//console.log(TCarr_actualValSorted);
						if(flag == 0){
							
//							alertify.alert("Zero Adjusted Successfully!!!");
							//$('#ZeroErrorKnockData').hide();
							$("#ZeroErrorKnockData").addClass("disabledDiv");
							$('#ZeroErrorKnockSuccess').html('');
							$('#ZeroErrorKnockSuccess').html('<div class="alert alert-success">Zero Adjusted Successfully!!!</div>');
							
							TCSpan_ClaibrationNeeded();
						}else{
							
							$('#ZeroErrorKnotch').html('');
							$('#ZeroErrorKnotch').html('<div class="alert alert-success">Zero Adjusted Successfully!!!</div>');
							
							$('#SpanErrorKnotch').show('');
							$('#SpanErrorKnotch').html('');							
							$('#SpanErrorKnotch').html('<div class="alert alert-success">Span Adjusted Successfully!!!</div>');
							
							//	CHECK LINEARITY from here
							 TC_CheckLinearitySection();
						}
						
						
						}else
					        {	
					
								 TCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
								 //console.log(TCarr_actualValSorted);
								  $("#ZeroangleVal").val(TCarr_actualValSorted[0]);
								 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
				           }
				   

					 
					 
				    // console.log(angle);
				    
				     var $elem = $('.icon-repeat1');

				     
				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ (now * 20)  +'deg)'
				             });
				         }
				     });
				    
				      
				     
				      

							
						
					
				 }
				 });
			 
		//zero  PLuS CLICK	 

				 $('#plus').bind("click",function (event) {
					 

					 zeroErrCnt++; 
					
				 if(angle <= range){
					 angle +=parseFloat(stepFix);
					 var n = angle.toFixed(2);
					 //console.log(n);
					 $('#minus').show();
				     
					 
					 
						ZeroValue = parseFloat((ZeroValue + parseFloat(stepFix)).toFixed(2));
						//console.log(ZeroValue);
						var ZeroValueFix = ZeroValue.toFixed(0);
						
					    TCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
					    //console.log(TCarr_actualValSorted);
					 
					
				    
				     var $elem = $('.icon-repeat1');

				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ (now * 20) +'deg)'
				             });
				         }
				     });
				     
				     $("#ZeroangleVal").val(TCarr_actualValSorted[0]);
				     if(range == n)
						{
				    	
							$('#plus').hide();
				    	 $('#ZeroErrorKnockSuccess').html('');
						$('#ZeroErrorKnockSuccess').html('<div class="alert alert-danger">Zero not Adjusted!!!</div>');
						}
				     
				     drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
				 }
				 });
	
	}
	
	// SPAN START HERE 
	
	var TCSpan_ClaibrationNeeded = function() {
		var TC_calibrateNeeded = '';
		TC_calibrateNeeded += '<div class="col-md-12" >'
			+'<div id="SpanErrorKnockData">'
			+'<h1>Adjust Span </h1>'
			+'<div id="Spanplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"><input type="Text" id="SpanangleVal"></div><div id="Spanminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			+'</div>'
			//+'</div>'
			+'<div id="SpanErrorKnockSuccess"></div>'
			$('#SpanErrorKnotch').html('');
			$('#SpanErrorKnotch').html(TC_calibrateNeeded);
			
			 range = Math.abs(range);
			var angle = 0;
			var temp  = 0;
			 var range = $("#spanerror").val();
			var ArrayLeng = TCarr_actualValSorted.length ;
			 var SpanValue = TCarr_actualValSorted[ArrayLeng - 1 ] ;
			 var ZeroValue = TCarr_actualValSorted[0] ;
			 //console.log(SpanValue);
			 var steps = range/10;
			 var stepFix = steps.toFixed(3);
			 //console.log(steps);
/// Span MINUS CLICK  
			 $("#SpanangleVal").val(TCarr_actualValSorted[ArrayLeng - 1 ]);
			 
			 $('#Spanminus').click(function (event) {
				 spanErrCnt++;
				 //console.log("Minus span");
				 if(angle <= -(range)){
				 angle -=parseFloat(stepFix);
				 var n = angle.toFixed(2);
				 
				// console.log(n);
				 
				// $('#minus').show();
			     
				 $('#Spanplus').show();
				 
				 SpanValue = parseFloat((SpanValue + parseFloat(stepFix)).toFixed(2));
				 
				 ZeroValue = parseFloat((ZeroValue + parseFloat(stepFix)).toFixed(2));
				 
				//	console.log(SpanValue);
					var SpanValueFix = SpanValue.toFixed(0);
					
					if(-(range) == n)
					{
						TCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
						TCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
						 $('#Spanminus').hide();
						 $('#SpanErrorKnockSuccess').html('');
							$('#SpanErrorKnockSuccess').html('<div class="alert alert-danger">Span not Adjusted!!!</div>');
							
						
					}else{
						
						TCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
						TCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
					}
					
				    
				    
				    
				    
				  //  console.log(TCarr_actualValSorted);
				 
				
			    
			     var $elem = $('.icon-repeat');
			     //console.log(n * 20);
			     $({deg: n}).animate({deg: n}, {
			      
			      
			         step: function(now) {
			         
			             $elem.css({
			                 'transform': 'rotate('+ ((-now) * 20) +'deg)'
			             });
			         }
			     });
			     $("#SpanangleVal").val(TCarr_actualValSorted[ArrayLeng - 1 ]);
			     
			     
			     drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
			 }
			 });
			 
		// Sapn PLUS CLICK	 

				 $('#Spanplus').click(function (event) {
					 spanErrCnt++;
					 $('#SpanErrorKnockSuccess').html('');	 
					 //console.log("plus span");
					 if(angle >= range){
					 angle +=parseFloat(stepFix);
					 var n = angle.toFixed(2);
					// //console.log(n);
					 
					// $('#minus').show();
					 $('#Spanminus').show();
					 
					 
					 SpanValue = parseFloat((SpanValue - parseFloat(stepFix)).toFixed(2));	
					 
					 ZeroValue = parseFloat((ZeroValue - parseFloat(stepFix)).toFixed(2));
					 
						//console.log(SpanValue);
						var SpanValueFix = SpanValue.toFixed(0);
						if(range == n)
						{ 
							TCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(20));
							TCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
							$('#Spanplus').hide();
							 $("#SpanangleVal").val(TCarr_actualValSorted[ArrayLeng - 1 ]);
							drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
//							alertify.alert("Span Error Adjusted Successfully!!!");
							//$('#SpanErrorKnockData').hide();
							//$('#ZeroErrorKnockData').show();
							$('#SpanErrorKnockData').addClass("disabledDiv");
							$('#ZeroErrorKnockData').removeClass("disabledDiv");
							$('#ZeroErrorKnockSuccess').html('');
							//$('#ZeroErrorKnockData').hide();
							$('#SpanErrorKnockSuccess').html('');
							$('#SpanErrorKnockSuccess').html('<div class="alert alert-success">Span Adjusted Successfully!!!</div><div class="alert alert-danger">But Zero affected. <br/>Adjust Zero Again</div>');
							TCZero_Calibartion(range, 1);
							
							
							
						
							
							}
						else
							{
					    TCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
					    TCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
					    $("#SpanangleVal").val(TCarr_actualValSorted[ArrayLeng - 1 ]);
					    drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
							}
						
						
						
					  //  console.log(TCarr_actualValSorted);
					 
					
				    
				     var $elem = $('.icon-repeat');
				     //console.log(n * 20);
				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ ((-now) * 20) +'deg)'
				             });
				         }
				     });
				    
				     
				     
				     
				 }
				 });
					 
	


		
	}
	
	// TOP LINEARITY
	
	var TC_calibrate_Top_Linearity_Needed = function ()
	{
		
		var TC_calibrate_Top_Linearity_Needed = '';
		TC_calibrate_Top_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionOneKnockData">'
			+'<h1>Linearity Algorithm 1</h1>'
			+'<div id="LinearityTopplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityTopminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityTopKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityTopKnotch').html(TC_calibrate_Top_Linearity_Needed);
			
			
			var angle = 0;
			var temp  = 0;
			
			 var LinearityValue = 0 ;
			 var defError = (TC_DefaultErr/12).toFixed(2);
			 var steps = defError/10;
			 var stepFix = parseFloat(steps.toFixed(3));
			 //console.log("steps "+stepFix);
			 
/// LINEARITY TOP MINUS CLICK  
			 
		
			 
			 
			 $('#LinearityTopminus').bind("click",function (event) {
					linearityAlgo1Cnt++;
				 $('#LinearityTopKnockSuccess').html('');
				
                 //console.log(defError);
				 if(angle <= defError){
					 angle +=parseFloat(stepFix);
					 var n = angle.toFixed(2);
					 //console.log("angle "+n);
				      
					 $('#LinearityTopplus').show();

					
					
					for( var i= 1; i<=(TCarr_actualValSorted.length-2); i++ )
						{
						
						var oldval =  TCarr_actualValSorted[i];
						var LinearityNewVal = (oldval - stepFix).toFixed(2);	
						//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
						
						 TCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
						
						 
						}
								
					 if(defError == n)
						{
						 $('#LinearityTopminus').hide();
						 $('#LinearitySectionOneKnockData').hide();
							// $('#LinearityKnockSuccess').html('');
						$('#LinearityTopKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 1 Adjusted Successfully!!!</div>');
							
					
						if(negativeVal.length != 0){
							
							
							  $("#ZeroErrorKnotch").hide();
								$("#SpanErrorKnotch").hide();
							
							TC_calibrate_Bottom_Linearity_Needed();
							$("#LinearityBottomKnotch").prop("hidden", false);
						}else{
							
							TC_calibrate_Both_Linearity_Needed();
							$("#LinearityBothKnotch").prop("hidden", false);
						}
						
						 }
					
					
					
					 //console.log(TCarr_actualValSorted);
						 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
				
				    
				     var $elem = $('.icon-repeat');

				     
				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ ((-now) * 20)  +'deg)'
				             });
				         }
				     });
				    
				      
				     
				      

							
						
					
				 }
				 });
			 
		// LINEARITY TOP PLUS CLICK	 

				 $('#LinearityTopplus').bind("click",function (event) {
						linearityAlgo1Cnt++;

	                 //console.log(defError);
					 if(angle >= -(defError)){
						 angle -=parseFloat(stepFix);
						 var n = angle.toFixed(2);
						 //console.log("angle "+n);
					      
						 $('#LinearityTopminus').show();

						
						
						for( var i= 1; i<=(TCarr_actualValSorted.length-2); i++ )
							{
							
							var oldval =  TCarr_actualValSorted[i];
							var LinearityNewVal = (oldval + stepFix).toFixed(2);	
							//console.log("oldvalue "+oldval+"  new Value "+LinearityNewVal);
							
							 TCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
							 
							 
							}
									
						 if((-defError) == n)
							{
							 $('#LinearityTopplus').hide();
							// $('#LinearityKnockSuccess').html('');
							 $('#LinearityTopKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 1 not Adjusted </div>');
							 }
						
						
						
						 //console.log(TCarr_actualValSorted);
						 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
				
					    
					     var $elem = $('.icon-repeat');

					     
					     $({deg: n}).animate({deg: n}, {
					      
					      
					         step: function(now) {
					         
					             $elem.css({
					                 'transform': 'rotate('+ ((-now) * 20)  +'deg)'
					             });
					         }
					     });
					    
					      
					     
					      

								
							
						
					 }
					 
			 });
	
	}
	
	
	// BOTTOM LINEARITY
	
	var TC_calibrate_Bottom_Linearity_Needed = function ()
	{
//		$("#ZeroErrorKnotch").hide();
//		$("#SpanErrorKnotch").hide();
		
		var TC_calibrate_Bottom_Linearity_Needed = '';
		TC_calibrate_Bottom_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionTwoKnockData">'
			+'<h1>Linearity Algorithm 2</h1>'
			+'<div id="LinearityBottomplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityBottomminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityBottomKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityBottomKnotch').html(TC_calibrate_Bottom_Linearity_Needed);
			
			//console.log("Section 2");
			var angle = 0;
			var temp  = 0;
			// var range = $("#linearity").val();
			 var LinearityValue = 0 ;
			 var defError = (TC_DefaultErr/12).toFixed(2);
			 var steps = defError/10;
			 var stepFix = parseFloat(steps.toFixed(3));
			 //console.log("steps "+stepFix);
			
			
			 // check Diffrence and indx of positive and negative difference
			 // clear all array and make updated with new values according to updated actual values
			 
		//	 checkVals.splice(0, checkVals.length);
			 negativeValueIndex.splice(0, negativeValueIndex.length);
			 positiveValueIndex.splice(0, positiveValueIndex.length);
			 
			 
				for( var i= 1; i<=(TCarr_actualValSorted.length-2); i++ )
				{
					
					var diff = (TCarr_actualValSorted[i] - TCarr_stdValSorted[i]).toFixed(2);
					
		//			checkVals.push(diff);
					
					if(diff < 0){
						
						negativeValueIndex.push(i);
						
					}else{
						
						positiveValueIndex.push(i);
						
					}
					
		//			checkDiffVals.push(Math.abs(diff));
				}
				
			//	 //console.log("diffrence array "+ checkDiffVals);
				 positiveVal = checkVals.filter((elem) => elem > 0);
			     negativeVal = checkVals.filter((elem) => elem < 0);
			 
				//console.log("in section 2 POSITIVE "+positiveVal.length+" negative val"+negativeVal.length);
			 
				//console.log("Positive value Index "+positiveValueIndex);
				 //console.log("negative value Index "+negativeValueIndex);
			 
			 
			 
			
			/// LINEARITY BOTTOM MINUS CLICK  
			 
			
					 
					 $('#LinearityBottomminus').bind("click",function (event) {

						 linearityAlgo2Cnt++;
						
		                 //console.log(defError);
						 if(angle >= -(defError)){
							 angle -=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						      
							 $('#LinearityBottomplus').show();

							
							 //console.log("negative value Index "+negativeValueIndex);
								
							 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
								{
								 
								var oldval =  TCarr_actualValSorted[negativeValueIndex[i]];
								
								var LinearityNewVal = (oldval - stepFix).toFixed(2);	
								//console.log("IN Minus old negative value "+oldval+"  new Value "+LinearityNewVal);
								
								 TCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
								 
								 
								}
									
								
							 
							 
							 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
								{
								 
								var oldval =  TCarr_actualValSorted[positiveValueIndex[i]];
							    //var idx = positiveValueIndex[i] - 1;
								var LinearityNewVal = (oldval - stepFix).toFixed(2);	
								//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
								//		"   new Value "+LinearityNewVal);
								
								 TCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
								
								 
								}
							 
							 
							 if(-(defError) == n)
								{
								 $('#LinearityBottomminus').hide();
								$('#LinearitySectionOneKnockData').hide();
								// $('#LinearityKnockSuccess').html('');
								$('#LinearityBottomKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 2 not Adjusted!!!</div>');
								
							
								
								 }
							
							
							
							 //console.log(TCarr_actualValSorted);
								 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
						           
						   

							 
							 
						 
						    
						     var $elem = $('.icon-repeat');

						     
						     $({deg: n}).animate({deg: n}, {
						      
						      
						         step: function(now) {
						         
						             $elem.css({
						                 'transform': 'rotate('+ ((now) * 20)  +'deg)'
						             });
						         }
						     });
						    
						      
						     
						      

									
								
							
						 }
						 });
			 
			 
			 
			 
			 
				// LINEARITY BOTTOM PLUS CLICK	 

						 $('#LinearityBottomplus').bind("click",function (event) {
							 linearityAlgo2Cnt++;
							 $('#LinearityBottomKnockSuccess').html('');

			                 //console.log(defError);
							 if(angle <= defError){
								 angle +=parseFloat(stepFix);
								 var n = angle.toFixed(2);
								 //console.log("angle "+n);
							      
								 $('#LinearityBottomminus').show();
								 
								
								 
								 
								
								 //console.log("negative value Index "+negativeValueIndex);
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  TCarr_actualValSorted[negativeValueIndex[i]];
								
									var LinearityNewVal = (oldval + stepFix).toFixed(2);	
									//console.log("Plus old negative value "+oldval +"  new Value "+LinearityNewVal);
									
									 TCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 
									 
									}
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  TCarr_actualValSorted[positiveValueIndex[i]];
								    //var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval + stepFix).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 TCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
											
								 if(defError == n)
									{
									 $('#LinearityBottomplus').hide();
									 $('#LinearitySectionTwoKnockData').hide();
									// $("#LinearityTopKnotch").prop("hidden", false);
									// $("#LinearityBottomKnotch").prop("hidden", false);
										$('#LinearityBottomKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 2  Adjusted successfully!!! </div>');

										$("#LinearityBothKnotch").prop("hidden", false);
										TC_calibrate_Both_Linearity_Needed();
									 }
								
								
								
								 //console.log(TCarr_actualValSorted);
									 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
							
							    
							     var $elem = $('.icon-repeat');

							     
							     $({deg: n}).animate({deg: n}, {
							      
							      
							         step: function(now) {
							         
							             $elem.css({
							                 'transform': 'rotate('+ ((now) * 20)  +'deg)'
							             });
							         }
							     });
							    
							      
							     
							      

										
									
								
							 }
							 
					 });
			
			
			
			
	}
	
	// BOTH LIEARITY
	
	var TC_calibrate_Both_Linearity_Needed = function(){
		$("#ZeroErrorKnotch").hide();
		$("#SpanErrorKnotch").hide();
//		console.log("IN SECTION 3");
		var TC_calibrate_Both_Linearity_Needed = '';
		TC_calibrate_Both_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionBothKnockData">'
			+'<h1>Linearity Algorithm 3</h1>'
			+'<div id="LinearityBothplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityBothminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityhBothKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityBothKnotch').html(TC_calibrate_Both_Linearity_Needed);
			
			//console.log("Section 3");
			var angle = 0;
			var temp  = 0;
//			var minDiff = Math.max.apply(null, checkDiffVals);
//			console.log("Min Diffrence "+ minDiff);
			
			var defError = (TC_DefaultErr/12).toFixed(2);
			var defError1 = (TC_DefaultErr/10).toFixed(2);
			// var defError = (minDiff/12).toFixed(2);
			var steps = defError/10;
			var stepFix = parseFloat(steps.toFixed(3));
			//console.log("steps "+stepFix);
			
			var steps1 = defError1/10;
			var stepFix1 = parseFloat(steps1.toFixed(3));
			
			//console.log("Old diffrence array with negative sign "+ checkVals);
			 //console.log("Old diffrence array "+ checkDiffVals);
			 
			
			 // check Diffrence and indx of positive and negative difference
			 // clear all array and make updated with new values according to updated actual values
			 
			 checkVals.splice(0, checkVals.length);
			 checkDiffVals.splice(0, checkDiffVals.length);
			 negativeValueIndex.splice(0, negativeValueIndex.length);
			 positiveValueIndex.splice(0, positiveValueIndex.length);
			 
			 
				for( var i= 1; i<=(TCarr_actualValSorted.length-2); i++ )
				{
					
					var diff = (TCarr_actualValSorted[i] - TCarr_stdValSorted[i]).toFixed(2);
					
					checkVals.push(diff);
					
					if(diff < 0){
						
						negativeValueIndex.push(i);
						
					}else{
						
						positiveValueIndex.push(i);
						
					}
					
					checkDiffVals.push(Math.abs(diff));
				}
				
		
				 positiveVal = checkVals.filter((elem) => elem > 0);
			     negativeVal = checkVals.filter((elem) => elem < 0);
			 
				//console.log("in section 3 POSITIVE "+positiveVal.length+" negative val"+negativeVal.length);
			
			
			
			
			 //console.log("New diffrence array with negative sign "+ checkVals);
			 //console.log("New diffrence array "+ checkDiffVals);
			 //console.log("Positive value Index "+positiveValueIndex);
			 //console.log("negative value Index "+negativeValueIndex);
			 
			 var stepedby10arr = [];
			 
			 for( var i= 0; i<=(checkDiffVals.length-1); i++ )
				{
				 		var temp = (checkDiffVals[i]/10).toFixed(3);
				 		stepedby10arr.push(temp);
				 		
				}
			 //console.log("Steped by 10 array "+stepedby10arr);
			 
			// LINEARITY BOTH PLUS CLICK	 

					 $('#LinearityBothplus').bind("click",function (event) {
						 linearityAlgo3Cnt++;
						 $('#LinearityhBothKnockSuccess').html('');
						 $('#LinearityBothminus').show();

		                 //console.log(defError);
						 if(angle <= defError){
							 angle +=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						      
							 
							 
							 
							
							 
							 if(positiveValueIndex.length != 0){
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  TCarr_actualValSorted[positiveValueIndex[i]];
								    var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval - stepedby10arr[idx]).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 TCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
							 }
							 
							
							 
							 
							if(negativeValueIndex.length != 0){
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  TCarr_actualValSorted[negativeValueIndex[i]];
									var idx = negativeValueIndex[i] - 1;
									var LinearityNewVal = (oldval + parseFloat(stepedby10arr[idx])).toFixed(2);
									//console.log("In Plus old negative value "+oldval+"  VALUE TOBE Plus "+stepedby10arr[idx]+
									//		"  new Value "+LinearityNewVal);
									
									 TCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 //console.log(TCarr_actualValSorted);
									 
									}
										
							}
								
							 if((defError) == n)
								{
								 $('#LinearityBothplus').hide();
								 $('#LinearitySectionBothKnockData').hide();
							
									$('#LinearityhBothKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 3  Adjusted successfully!!! </div>');
									
									$('#TC_Calibration_Input').hide();
									$('#LinearityKnotch').html('');
									$('#LinearityKnotch').html('<div class="alert alert-success blink" style="font-size:16px; font-weight:bold;">Zero , Span & Linearity Adjusted successfully!!! </div>');
									 function blink(selector){
											$(selector).fadeOut('slow', function(){
											    $(this).fadeIn('slow', function(){
											        blink(this);
											    });
											});
											}
											    
											blink('.blink');
									TC_updatedDataTable(TColdreadingSorted,TCarr_actualValSorted);
									
								 }
							
							
							
							 //console.log(TCarr_actualValSorted);
								 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
						
						    
						     var $elem = $('.icon-repeat');

						     
						     $({deg: n}).animate({deg: n}, {
						      
						      
						         step: function(now) {
						         
						             $elem.css({
						                 'transform': 'rotate('+ ((now) * 20)  +'deg)'
						             });
						         }
						     });
						    
						      
						     
						      

									
								
							
						 }
						 
				 });
		
		
					 
					 
					 
					// LINEARITY BOTH Minus CLICK	 

					 $('#LinearityBothminus').bind("click",function (event) {
						  linearityAlgo3Cnt++;
						 $('#LinearityBothplus').show();
		                 //console.log(defError);
						 if(angle >= -(defError)){
							 angle -=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						  
							 
							 
							
							 
							 if(positiveValueIndex.length != 0){
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  TCarr_actualValSorted[positiveValueIndex[i]];
								    var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval + parseFloat(stepedby10arr[idx])).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 TCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
							 }
							 
							
							 
							 
							if(negativeValueIndex.length != 0){
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  TCarr_actualValSorted[negativeValueIndex[i]];
									var idx = negativeValueIndex[i] - 1;
									var LinearityNewVal = (oldval - parseFloat(stepedby10arr[idx])).toFixed(2);
									//console.log("In Plus old negative value "+oldval+"  VALUE TOBE Plus "+stepedby10arr[idx]+
									//		"  new Value "+LinearityNewVal);
									
									 TCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 //console.log(TCarr_actualValSorted);
									 
									}
										
							}
								
							 if((-defError) == n)
								{
								 $('#LinearityBothminus').hide();
								 $('#LinearityhBothKnockSuccess').html('');
									$('#LinearityhBothKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 3  not Adjusted!!! </div>');
									
									
									
								 }
							
							
							
							 //console.log(TCarr_actualValSorted);
								 drawGraph(TColdreadingSorted, TCarr_actualValSorted);	
						
						    
						     var $elem = $('.icon-repeat');

						     
						     $({deg: n}).animate({deg: n}, {
						      
						      
						         step: function(now) {
						         
						             $elem.css({
						                 'transform': 'rotate('+ ((-now) * 20)  +'deg)'
						             });
						         }
						     });
						    
						      
						     
						      

									
								
							
						 }
						 
				 });
			
			
	}
	
	
	// CHECK LINEARITY
	
	var TC_CheckLinearitySection = function()
	{
    
		
		
		$("#LinearityKnotch").prop("disabled", false);
		 
			for( var i= 1; i<=(TCarr_actualValSorted.length-2); i++ )
			{
				
				var diff = (TCarr_actualValSorted[i] - TCarr_stdValSorted[i]).toFixed(2);
				
				checkVals.push(diff);
				
				if(diff < 0){
					
					negativeValueIndex.push(i);
					
				}else{
					
					positiveValueIndex.push(i);
					
				}
				
				checkDiffVals.push(Math.abs(diff));
			}
			
			 //console.log("diffrence array "+ checkDiffVals);
			 positiveVal = checkVals.filter((elem) => elem > 0);
		     negativeVal = checkVals.filter((elem) => elem < 0);
		 
			//console.log("POSITIVE "+positiveVal.length+" negative val"+negativeVal.length);
		 
			if(positiveVal.length != 0 || (positiveVal.length != 0 && negativeVal.length != 0)){
				$("#LinearityTopKnotch").prop("hidden", false);
				TC_calibrate_Top_Linearity_Needed();
				
			}else{
				$("#LinearityBottomKnotch").prop("hidden", false);
				
				$("#ZeroErrorKnotch").show();
				$("#SpanErrorKnotch").show();
				
				TC_calibrate_Bottom_Linearity_Needed();
			}
			
		
	}
	
	// NEW TABLE
	
	var TC_updatedDataTable = function(TColdreadingSorted,TCarr_actualValSorted)
	{
		
		
		var TC_IOtable = '';
		
		TC_IOtable += '<div class="row"><div id = "IOtable" class="col-md-12">'
				+ '<table id="TC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
				+ '<thead>'
				+ '<tr>'
				+ '<th>Reading No.</th>'
				+ '<th>	Input (in <sup>0</sup>C)</th>'
				+ '<th>Output (in mA)</th>'
				+ '</tr>'
				+ '</thead>'

				+ '<tbody >'
				for (var i = 0; i < TCarr_actualValSorted.length ; i++ ) {
					TC_IOtable += '<tr><td>'
				+ (i+1)
				+ '</td><td>'
				+ TColdreadingSorted[i]
				+ '</td><td>'
				+ TCarr_actualValSorted[i]
				+ '</td></tr>'
		}
		TC_IOtable += '</tbody>'

				+ '</table>'
				+ '</div>'
				  + '<div class="col-md-12" ><p>After few months transmitter is not working properly.  As a maintenance engineer, Please attend the fault &nbsp;&nbsp; </p>'
					
	               + '<button id="TC_FaultChecking">Next level</button>'
					+'</div>'
		//readingcnt++;
//				$('#table_IO').DataTable({
//					 "pageLength" : 5,
//				        dom: 'Bfrtip',
//				       // "bDestroy": true,
//					title : 'Data export',
//					buttons : [ {
//						extend : 'excelHtml5',
//						title : 'TC Characterisation value'
//
//					}, {
//						extend : 'pdfHtml5',
//						title : 'TC Characterisation value'
//					} ]
//				});	

		$('#LinearityKnotch').append(TC_IOtable);
		$('#LinearityKnotch').ready(function() {
			$('#TC_DataTable_IO').DataTable({
				"pageLength" : 5,
				dom: 'Bfrtip',
				//"order" : [ [ 10, "desc" ] ],
				title : 'TC_calibration',
				buttons : [ {
					extend : 'excelHtml5',
					title : 'TT Characterisation value'

				}, {
					extend : 'pdfHtml5',
					title : 'TT Characterisation value'
				} ]

			});
		});
		
//		drawGraph(TColdreading, TCarr_actualVal)
		
		TCCalibrationData.tcoldReadingSorted = TColdreadingSorted
		TCCalibrationData.tcactualValNew = TCarr_actualValSorted;
		TCCalibrationData.tcZeroAdjustCnt = zeroErrCnt;
		TCCalibrationData.tcSpanAdjustCnt = spanErrCnt;
		TCCalibrationData.tcLinearAlgo1AdjustCnt = linearityAlgo1Cnt;
		TCCalibrationData.tcLinearAlgo2AdjustCnt = linearityAlgo2Cnt;
		TCCalibrationData.tcLinearAlgo3AdjustCnt = linearityAlgo3Cnt;
		
		ExpTrackData.tcCalibrationData = TCCalibrationData;
		
//		console.log(ExpTrackData);
		
		$('#TC_FaultChecking').on('click', function() {
			//console.log("entered in fault" +TCarr_actualValSorted);
			TC_FaultCheckFun(lowerSpLevel, higherSpLevel, TColdreadingSorted, TCarr_actualValSorted, TCarr_stdValSorted);
		});
	}
	
	// TC GRAPH
	
	function drawGraph(TColdreadingSorted, TCarr_actualValSorted){
		var OldValue = [];
		var StdValue = [];
		for (var j = 0; j < TColdreadingSorted.length; j++) {
			var olValueJson = {
				x : TColdreadingSorted[j],
				y : TCarr_actualValSorted[j],
				markerType : "circle",
				markerSize : 10

			};
			OldValue.push(olValueJson);
			var stdValueJson = {
					x : TColdreadingSorted[j],
					y : TCarr_stdValSorted[j],
					markerType : "circle",
					markerSize : 10

				};
			StdValue.push(stdValueJson);
			
		}
		// console.log(OldValue);
		var chart = new CanvasJS.Chart("TC_chartContainer",
				{
					animationEnabled : true,
					theme : "light2",
					title : {
						text : "Temperature Control System",
						fontSize : 20,
					},

					axisX : {
						title : "output",
						crosshair : {
							enabled : true,
							snapToDataPoint : true
						},
					// ticks: {suggestedMin: 2, max:6}
					},
					axisY : {
						title : "input",
						minimum : 3,
						maximum : 21
					},

					toolTip : {
						shared : true
					},
					legend : {
						cursor : "pointer",
						verticalAlign : "bottom",
						horizontalAlign : "right",
						dockInsidePlotArea : true,
						itemclick : toogleDataSeries
					},
					data : [  {
						type : "line",
						showInLegend : true,
						name : "Standard Output",
						// lineDashType: "dash",
						color : "#39FF14",
						dataPoints : [ {
							x : lowerSpLevel,
							y : 4
						}, {
							x : higherSpLevel,
							y : 20
						} ]
					}, {
						type : "scatter",
						showInLegend : true,
						name : "Observed Output",
						markerType : "circle",
						// xValueFormatString: "DD MMM,
						// YYYY",
						color : "#F08080",

						dataPoints : OldValue
					}
//					, {
//						type : "scatter",
//						showInLegend : true,
//						name : "Observed Output",
//						markerType : "triangle",
//						// xValueFormatString: "DD MMM,
//						// YYYY",
//						color : "#000",
//
//						dataPoints : StdValue
//					}
					
					]
				});
		chart.render();

		function toogleDataSeries(e) {
			if (typeof (e.dataSeries.visible) === "undefined"
					|| e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			}
			chart.render();
		}
		
		 
		
		
	}
	
	
	
}