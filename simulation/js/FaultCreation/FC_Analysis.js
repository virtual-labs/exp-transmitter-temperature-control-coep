// JavaScript Document


//ExpTrackData = {
//	"lcAppData": {
//		"lcTestData": {
//			"appId": "1",
//			"rightQuesCnt": 5
//		},
//		"lcConfigData": {
//			"appId": "1",
//			"trsmtrTpye": "twowire",
//			"span": 5,
//			"range": "5.88",
//			"output": "0",
//			"configcnt": 3,
//			"lowerSpanLevel": 0,
//			"higherSpanLevel": 5
//		}
//	},
//	"connData": {
//		"appId": "1",
//		"trsmtrType": "twowire",
//		"connDiagjson": "[\n  {\n    \"type\": \"draw2d.SetFigure\",\n    \"id\": \"PowerSupply\",\n    \"x\": 227.25,\n    \"y\": 167.8125,\n    \"width\": 100,\n    \"height\": 100,\n    \"alpha\": 1,\n    \"selectable\": true,\n    \"draggable\": true,\n    \"angle\": 0,\n    \"userData\": {},\n    \"cssClass\": \"draw2d_SetFigure\",\n    \"ports\": [\n      {\n        \"type\": \"draw2d.HybridPort\",\n        \"id\": \"psPlusId\",\n        \"width\": 10,\n        \"height\": 10,\n        \"alpha\": 1,\n        \"selectable\": false,\n        \"draggable\": true,\n        \"angle\": 0,\n        \"userData\": {},\n        \"cssClass\": \"draw2d_HybridPort\",\n        \"bgColor\": \"rgba(79,104,112,1)\",\n        \"color\": \"rgba(27,27,27,1)\",\n        \"stroke\": 1,\n        \"dasharray\": null,\n        \"maxFanOut\": 9007199254740991,\n        \"name\": \"psPlus\",\n        \"port\": \"draw2d.HybridPort\",\n        \"locator\": \"draw2d.layout.locator.XYRelPortLocator\"\n      },\n      {\n        \"type\": \"draw2d.HybridPort\",\n        \"id\": \"psMinusId\",\n        \"width\": 10,\n        \"height\": 10,\n        \"alpha\": 1,\n        \"selectable\": false,\n        \"draggable\": true,\n        \"angle\": 0,\n        \"userData\": {},\n        \"cssClass\": \"draw2d_HybridPort\",\n        \"bgColor\": \"rgba(79,104,112,1)\",\n        \"color\": \"rgba(27,27,27,1)\",\n        \"stroke\": 1,\n        \"dasharray\": null,\n        \"maxFanOut\": 9007199254740991,\n        \"name\": \"psMinus\",\n        \"port\": \"draw2d.HybridPort\",\n        \"locator\": \"draw2d.layout.locator.XYRelPortLocator\"\n      }\n    ],\n    \"bgColor\": \"rgba(0,0,0,0)\",\n    \"color\": \"rgba(27,27,27,1)\",\n    \"stroke\": 0,\n    \"radius\": 0,\n    \"dasharray\": null\n  },\n  {\n    \"type\": \"draw2d.SetFigure\",\n    \"id\": \"Signal\",\n    \"x\": 545.25,\n    \"y\": 162.8125,\n    \"width\": 100,\n    \"height\": 100,\n    \"alpha\": 1,\n    \"selectable\": true,\n    \"draggable\": true,\n    \"angle\": 0,\n    \"userData\": {},\n    \"cssClass\": \"draw2d_SetFigure\",\n    \"ports\": [\n      {\n        \"type\": \"draw2d.HybridPort\",\n        \"id\": \"sgnlMinusId\",\n        \"width\": 10,\n        \"height\": 10,\n        \"alpha\": 1,\n        \"selectable\": false,\n        \"draggable\": true,\n        \"angle\": 0,\n        \"userData\": {},\n        \"cssClass\": \"draw2d_HybridPort\",\n        \"bgColor\": \"rgba(79,104,112,1)\",\n        \"color\": \"rgba(27,27,27,1)\",\n        \"stroke\": 1,\n        \"dasharray\": null,\n        \"maxFanOut\": 9007199254740991,\n        \"name\": \"sgnlMinus\",\n        \"port\": \"draw2d.HybridPort\",\n        \"locator\": \"draw2d.layout.locator.XYRelPortLocator\"\n      },\n      {\n        \"type\": \"draw2d.HybridPort\",\n        \"id\": \"sgnlplusId\",\n        \"width\": 10,\n        \"height\": 10,\n        \"alpha\": 1,\n        \"selectable\": false,\n        \"draggable\": true,\n        \"angle\": 0,\n        \"userData\": {},\n        \"cssClass\": \"draw2d_HybridPort\",\n        \"bgColor\": \"rgba(79,104,112,1)\",\n        \"color\": \"rgba(27,27,27,1)\",\n        \"stroke\": 1,\n        \"dasharray\": null,\n        \"maxFanOut\": 9007199254740991,\n        \"name\": \"sgnlplus\",\n        \"port\": \"draw2d.HybridPort\",\n        \"locator\": \"draw2d.layout.locator.XYRelPortLocator\"\n      }\n    ],\n    \"bgColor\": \"rgba(0,0,0,0)\",\n    \"color\": \"rgba(27,27,27,1)\",\n    \"stroke\": 0,\n    \"radius\": 0,\n    \"dasharray\": null\n  },\n  {\n    \"type\": \"draw2d.SetFigure\",\n    \"id\": \"twoWireTrans_LT\",\n    \"x\": 401.25,\n    \"y\": 31.8125,\n    \"width\": 100,\n    \"height\": 95,\n    \"alpha\": 1,\n    \"selectable\": true,\n    \"draggable\": true,\n    \"angle\": 0,\n    \"userData\": {},\n    \"cssClass\": \"draw2d_SetFigure\",\n    \"ports\": [\n      {\n        \"type\": \"draw2d.HybridPort\",\n        \"id\": \"LT_twowireTransPlusId\",\n        \"width\": 10,\n        \"height\": 10,\n        \"alpha\": 1,\n        \"selectable\": false,\n        \"draggable\": true,\n        \"angle\": 0,\n        \"userData\": {},\n        \"cssClass\": \"draw2d_HybridPort\",\n        \"bgColor\": \"rgba(79,104,112,1)\",\n        \"color\": \"rgba(27,27,27,1)\",\n        \"stroke\": 1,\n        \"dasharray\": null,\n        \"maxFanOut\": 9007199254740991,\n        \"name\": \"LT_twowireTransPlus\",\n        \"port\": \"draw2d.HybridPort\",\n        \"locator\": \"draw2d.layout.locator.XYRelPortLocator\"\n      },\n      {\n        \"type\": \"draw2d.HybridPort\",\n        \"id\": \"LT_twowireTransMinusId\",\n        \"width\": 10,\n        \"height\": 10,\n        \"alpha\": 1,\n        \"selectable\": false,\n        \"draggable\": true,\n        \"angle\": 0,\n        \"userData\": {},\n        \"cssClass\": \"draw2d_HybridPort\",\n        \"bgColor\": \"rgba(79,104,112,1)\",\n        \"color\": \"rgba(27,27,27,1)\",\n        \"stroke\": 1,\n        \"dasharray\": null,\n        \"maxFanOut\": 9007199254740991,\n        \"name\": \"LT_twowireTransMinus\",\n        \"port\": \"draw2d.HybridPort\",\n        \"locator\": \"draw2d.layout.locator.XYRelPortLocator\"\n      }\n    ],\n    \"bgColor\": \"rgba(0,0,0,0)\",\n    \"color\": \"rgba(27,27,27,1)\",\n    \"stroke\": 0,\n    \"radius\": 0,\n    \"dasharray\": null\n  },\n  {\n    \"type\": \"draw2d.Connection\",\n    \"id\": \"ea190e37-0097-c316-e8a1-66309e48a2ba\",\n    \"alpha\": 1,\n    \"selectable\": true,\n    \"draggable\": true,\n    \"angle\": 0,\n    \"userData\": {},\n    \"cssClass\": \"draw2d_Connection\",\n    \"stroke\": 1.35,\n    \"color\": \"rgba(0,168,240,1)\",\n    \"outlineStroke\": 0,\n    \"outlineColor\": \"rgba(0,0,0,0)\",\n    \"policy\": \"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy\",\n    \"vertex\": [\n      {\n        \"x\": 329.25,\n        \"y\": 232.8125\n      },\n      {\n        \"x\": 437.25,\n        \"y\": 232.8125\n      },\n      {\n        \"x\": 437.25,\n        \"y\": 227.8125\n      },\n      {\n        \"x\": 545.25,\n        \"y\": 227.8125\n      }\n    ],\n    \"router\": \"draw2d.layout.connection.InteractiveManhattanConnectionRouter\",\n    \"radius\": 3,\n    \"routingMetaData\": {\n      \"routedByUserInteraction\": false,\n      \"fromDir\": 1,\n      \"toDir\": 3\n    },\n    \"source\": {\n      \"node\": \"PowerSupply\",\n      \"port\": \"psMinus\"\n    },\n    \"target\": {\n      \"node\": \"Signal\",\n      \"port\": \"sgnlMinus\"\n    }\n  },\n  {\n    \"type\": \"draw2d.Connection\",\n    \"id\": \"59704864-1d4a-10a1-8269-7d20e1dd6dfb\",\n    \"alpha\": 1,\n    \"selectable\": true,\n    \"draggable\": true,\n    \"angle\": 0,\n    \"userData\": {},\n    \"cssClass\": \"draw2d_Connection\",\n    \"stroke\": 1.35,\n    \"color\": \"rgba(0,168,240,1)\",\n    \"outlineStroke\": 0,\n    \"outlineColor\": \"rgba(0,0,0,0)\",\n    \"policy\": \"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy\",\n    \"vertex\": [\n      {\n        \"x\": 329.25,\n        \"y\": 202.8125\n      },\n      {\n        \"x\": 365.25,\n        \"y\": 202.8125\n      },\n      {\n        \"x\": 365.25,\n        \"y\": 105.9125\n      },\n      {\n        \"x\": 401.25,\n        \"y\": 105.9125\n      }\n    ],\n    \"router\": \"draw2d.layout.connection.InteractiveManhattanConnectionRouter\",\n    \"radius\": 3,\n    \"routingMetaData\": {\n      \"routedByUserInteraction\": false,\n      \"fromDir\": 1,\n      \"toDir\": 3\n    },\n    \"source\": {\n      \"node\": \"PowerSupply\",\n      \"port\": \"psPlus\"\n    },\n    \"target\": {\n      \"node\": \"twoWireTrans_LT\",\n      \"port\": \"LT_twowireTransPlus\"\n    }\n  },\n  {\n    \"type\": \"draw2d.Connection\",\n    \"id\": \"395a11bd-8f00-843d-fe98-e27dad274ca9\",\n    \"alpha\": 1,\n    \"selectable\": true,\n    \"draggable\": true,\n    \"angle\": 0,\n    \"userData\": {},\n    \"cssClass\": \"draw2d_Connection\",\n    \"stroke\": 1.35,\n    \"color\": \"rgba(0,168,240,1)\",\n    \"outlineStroke\": 0,\n    \"outlineColor\": \"rgba(0,0,0,0)\",\n    \"policy\": \"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy\",\n    \"vertex\": [\n      {\n        \"x\": 501.25,\n        \"y\": 105.9125\n      },\n      {\n        \"x\": 523.25,\n        \"y\": 105.9125\n      },\n      {\n        \"x\": 523.25,\n        \"y\": 197.8125\n      },\n      {\n        \"x\": 545.25,\n        \"y\": 197.8125\n      }\n    ],\n    \"router\": \"draw2d.layout.connection.InteractiveManhattanConnectionRouter\",\n    \"radius\": 3,\n    \"routingMetaData\": {\n      \"routedByUserInteraction\": false,\n      \"fromDir\": 1,\n      \"toDir\": 3\n    },\n    \"source\": {\n      \"node\": \"twoWireTrans_LT\",\n      \"port\": \"LT_twowireTransMinus\"\n    },\n    \"target\": {\n      \"node\": \"Signal\",\n      \"port\": \"sgnlplus\"\n    }\n  }\n]",
//		"chkConnCnt": 1,
//		"chkRightConn": 1
//	},
//	"lcCharactData": {
//		"LCreading": [0, 0.3, 1, 1.9, 3, 3.8, 4.6, 5],
//		"LCactualVal": [4.92, 5.84, 8.27, 11.15, 14.62, 15.6, 18.29, 19.59],
//		"LCstdVal": [4, 4.96, 7.2, 10.08, 13.6, 16.16, 18.72, 20]
//	},
//	"lcCalibrationData": {
//		"lcZeroErr": "0.92",
//		"lcZeroErrCnt": 0,
//		"lcSpanErr": "-0.41",
//		"lcSpanErrCnt": 0,
//		"lcLinearityErr": "0.997",
//		"lcLinearityErrCnt": 0,
//		"lcAccuracyErr": "5.56",
//		"lcAccuracyErrCnt": 0,
//		"lcoldReadingSorted": [0, 0.3, 1, 1.9, 3, 3.8, 4.6, 5],
//		"lcactualValNew": [4, 4.94, 7.17, 10.05, 13.62, 16.2, 18.69, 20],
//		"lcZeroAdjustCnt": 32,
//		"lcSpanAdjustCnt": 16,
//		"lcLinearAlgo1AdjustCnt": 10,
//		"lcLinearAlgo2AdjustCnt": 22,
//		"lcLinearAlgo3AdjustCnt": 16
//	},
//	"lcFaultDetectionCnt": 4
//}





//var TransmitterDB = TransmitterDB || {};

 $(function () {

//	 $("#Reqtimer").css("display","none");
//TransmitterDB.FCAnalysis_TransmitterDB = function() {
	
	 FCAnalysis_TransmitterDB = function() {
	
		 
//		 console.log(ExpTrackData);
		 
		 FC_dataForAnalysis = [];
		 FC_Test_conf = {};
		 FC_Conncetion = {};
		 FC_Test = {};
		 FC_Calibration = {};
		 FC_Fault = {};
		 
		 
		 
		 
		 var fctime1 = "00"+":"+ExpTrackData.theoryData.minutes +":"+ ExpTrackData.theoryData.seconds;
		 var fctime2 = "00"+":"+ExpTrackData.fcAppData.fcTestData.TesttimeinMin +":"+  ExpTrackData.fcAppData.fcTestData.TesttimeinSec;
		 var fctime3 = "00"+":"+ExpTrackData.fcAppData.fcConfigData.configTimeInMin +":"+ ExpTrackData.fcAppData.fcConfigData.configTimeInSec;
		 var fctime4 = "00"+":"+ExpTrackData.connData.connTimeInMin +":"+ ExpTrackData.connData.connTimeInsec;
		 var fctime5 = "00"+":"+ExpTrackData.fcCharactData.CharacTimeInMin +":"+ ExpTrackData.fcCharactData.CharacTimeInSec;
		 var fctime6 = "00"+":"+ExpTrackData.fcCalibrationData.fcCalibrationTimeInMin +":"+ ExpTrackData.fcCalibrationData.fcCalibrationTimeInSec;
		 var fctime7 = "00"+":"+ExpTrackData.fcFaultDetectionTimeInMin +":"+ ExpTrackData.fcFaultDetectionTimeInSec;
		 
//		 console.log("Time 1   "+ fctime1);
//		 console.log("Time 2   "+ fctime2);
//		 console.log("Time 3   "+ fctime3);
//		 console.log("Time 4   "+ fctime4);
//		 console.log("Time 5   "+ fctime5);
//		 console.log("Time 6   "+ fctime6);
//		 console.log("Time 7   "+ fctime7);
		 
		    var hour=0;
	        var minute=0;
	        var second=0;
	        
	        var splitTime1= fctime1.split(':');
	        var splitTime2= fctime2.split(':');
	        var splitTime3= fctime3.split(':');
	        var splitTime4= fctime4.split(':');
	        var splitTime5= fctime5.split(':');
	        var splitTime6= fctime6.split(':');
	        var splitTime7= fctime7.split(':');
	        
	        hour = parseInt(splitTime1[0])+parseInt(splitTime2[0])+parseInt(splitTime3[0])+parseInt(splitTime4[0])+parseInt(splitTime5[0])+parseInt(splitTime6[0])+parseInt(splitTime7[0]);
	        minute = parseInt(splitTime1[1])+parseInt(splitTime2[1])+parseInt(splitTime3[1])+parseInt(splitTime4[1])+parseInt(splitTime5[1])+parseInt(splitTime6[1])+parseInt(splitTime7[1]);
	        hour = hour + minute/60;
	        minute = minute%60;
	        second = parseInt(splitTime1[2])+parseInt(splitTime2[2])+parseInt(splitTime3[2])+parseInt(splitTime4[2])+parseInt(splitTime5[2])+parseInt(splitTime6[2])+parseInt(splitTime7[2]);
	        minute = minute + second/60;
	        second = second%60;
	        
	        var Callhr = parseInt(splitTime2[0])+parseInt(splitTime3[0]) ;
	        var CallMin = parseInt(splitTime2[1])+parseInt(splitTime3[1]) ;
	        var Callsec = parseInt(splitTime2[2])+parseInt(splitTime3[2]) ;
//	        console.log("calibration Time 3   "+Callhr +":"+CallMin+":"+Callsec);
//	        console.log("sum of above time= " + parseInt(hour)+":"+ parseInt(minute)+":"+ parseInt(second));
		 
		 
	        var AnalysisSts ;
//	        var TestanalysisFinal = 0;
		 attaindedcnt = 0;
		 notattainded = 0;

		 TestAnalysisPer = ((ExpTrackData.fcAppData.fcTestData.rightQuesCnt/6 ) * 100); 
		 //console.log(TestAnalysisPer);
		 TestAnalysisPerFinal = ((TestAnalysisPer * 20 ) / 100);

		 if(TestAnalysisPerFinal < 0)
		 { TestAnalysisPerFinal = 0 }
		 
		 
		 //console.log(TestAnalysisPerFinal);

		 ConfAnalysisPer = ((ExpTrackData.fcAppData.fcConfigData.configcnt / 5 ) * 100);
		 //console.log(ConfAnalysisPer);
		 ConfAnalysisPerFinal = (((100 - ConfAnalysisPer) * 20 ) / 100);
		 //console.log(ConfAnalysisPerFinal);

		 Test_con_AttendedPer = ((TestAnalysisPer + (100 - ConfAnalysisPer))/200) * 100 ;
		
		 FC_Test_conf.TotalPer = 40;
		 FC_Test_conf.optained = (TestAnalysisPerFinal + ConfAnalysisPerFinal)
		 
		 FC_dataForAnalysis.push(FC_Test_conf);
		 
		 if(ConfAnalysisPerFinal < 0)
		 { ConfAnalysisPerFinal = 0 }

		 testAndRangeAnalysis = parseFloat(TestAnalysisPerFinal) + parseFloat(ConfAnalysisPerFinal);
		 WringDigAnalysisPer = ((ExpTrackData.connData.chkConnCnt / 3 ) * 100 );
//		 console.log(WringDigAnalysisPer);
		 WringDigAnalysisPerFinal = (((100 - WringDigAnalysisPer) * 15 ) / 100);
//		 console.log(WringDigAnalysisPerFinal);

		 if(WringDigAnalysisPerFinal < 0)
		 { WringDigAnalysisPerFinal = 0 }

		 FC_Conncetion.TotalPer = 15;
		 FC_Conncetion.optained = (WringDigAnalysisPerFinal + 0);
		 
		 FC_dataForAnalysis.push(FC_Conncetion);
		 
		 TestingzeroAnalysisPer = ((ExpTrackData.fcCalibrationData.fcZeroErrCnt / 5 ) * 100 );
		 TestingzeroAnalysisPerFinal = (((100 - TestingzeroAnalysisPer) * 5 ) / 100);

		 if(TestingzeroAnalysisPerFinal < 0)
		 { TestingzeroAnalysisPerFinal = 0 }

		 TestingSpanAnalysisPer = ((ExpTrackData.fcCalibrationData.fcSpanErrCnt / 5 ) * 100);
		 TestingSpanAnalysisPerFinal = (((100 - TestingSpanAnalysisPer) * 5 ) / 100);

		 if(TestingSpanAnalysisPerFinal < 0)
		 { TestingSpanAnalysisPerFinal = 0 }

		 TestingLinearityAnalysisPer = ((ExpTrackData.fcCalibrationData.fcLinearityErrCnt / 5 ) * 100 );
		 TestingLinearityAnalysisPerFinal = (((100 - TestingLinearityAnalysisPer) * 5 ) / 100);

		 if(TestingLinearityAnalysisPerFinal < 0)
		 { TestingLinearityAnalysisPerFinal = 0 }

		 TestingAccuracyAnalysisPer = ((ExpTrackData.fcCalibrationData.fcAccuracyErrCnt / 5 ) * 100 );
		 TestingAccuracyAnalysisPerFinal = (((100 - TestingAccuracyAnalysisPer) * 5 ) / 100);

		 if(TestingAccuracyAnalysisPerFinal < 0)
		 { TestingAccuracyAnalysisPerFinal = 0 }

		 TestingAnalysisPer = parseFloat(TestingzeroAnalysisPerFinal) + parseFloat(TestingSpanAnalysisPerFinal) + parseFloat(TestingLinearityAnalysisPerFinal) + parseFloat(TestingAccuracyAnalysisPerFinal);

		 Test_AttendedPer = (((100 - TestingzeroAnalysisPer) + (100 - TestingSpanAnalysisPer) + (100 - TestingLinearityAnalysisPer) + (100 - TestingAccuracyAnalysisPer))/400) * 100 ;

		 FC_Test.TotalPer = 20;
		 FC_Test.optained = (TestingAnalysisPer + 0);
		 
		 FC_dataForAnalysis.push(FC_Test);
		 
			 if((ExpTrackData.fcCalibrationData.fcZeroAdjustCnt - 20) < 20 )
			 {
			 TestingzeroAlgoAnalysisPer = (((ExpTrackData.fcCalibrationData.fcZeroAdjustCnt - 20) / 20 ) * 100 );
			 TestingzeroAlgoAnalysisPerFinal = (((100 - TestingzeroAlgoAnalysisPer) * 2 ) / 100);
			 }else
			 {
			 TestingzeroAlgoAnalysisPer = 0;
			 TestingzeroAlgoAnalysisPerFinal = 0;
			 }
			 

			 if((ExpTrackData.fcCalibrationData.fcSpanAdjustCnt - 10) < 10 )
			 {
				 TestingSpanAlgoAnalysisPer = (((ExpTrackData.fcCalibrationData.fcSpanAdjustCnt - 10 ) / 10 ) * 100);
				 TestingSpanAlgoAnalysisPerFinal = (((100 - TestingSpanAlgoAnalysisPer) * 2 ) / 100);
			 }else
			 {
				 TestingSpanAlgoAnalysisPer = 0;
				 TestingSpanAlgoAnalysisPerFinal = 0;
			 }
	

		// algo 1 count is 0
		if(ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt != 0 && ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt != 0)
		{
			if((ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt - 10) < 10 )
			 {
					TestingLinearityAlgo1AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt - 10) / 10 ) * 100 );
					TestingLinearityAlgo1AnalysisPerFinal = (((100 - TestingLinearityAlgo1AnalysisPer) * 2 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo1AnalysisPer = 0;
				 TestingLinearityAlgo1AnalysisPerFinal = 0;
			 }
			 if((ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt - 10) < 10 )
			 {
					TestingLinearityAlgo2AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt - 10) / 10 ) * 100 );
					TestingLinearityAlgo2AnalysisPerFinal = (((100 - TestingLinearityAlgo2AnalysisPer) * 2 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo2AnalysisPer = 0;
				 TestingLinearityAlgo2AnalysisPerFinal = 0;
			 }
			 if((ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10) < 10 )
			 {
				TestingLinearityAlgo3AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo3AnalysisPerFinal = (((100 - TestingLinearityAlgo3AnalysisPer) * 2 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo3AnalysisPer = 0;
				 TestingLinearityAlgo3AnalysisPerFinal = 0;
			 }
		Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) + (100 - TestingLinearityAlgo1AnalysisPer) + (100 - TestingLinearityAlgo2AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/500) * 100 ;
		 TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal) + parseFloat(TestingLinearityAlgo1AnalysisPerFinal) + parseFloat(TestingLinearityAlgo2AnalysisPerFinal) + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
		}
		if((ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt == 0))
		{

			if((ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt - 10) < 10 )
			 {
					TestingLinearityAlgo2AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt - 10) / 10 ) * 100 );
					TestingLinearityAlgo2AnalysisPerFinal = (((100 - TestingLinearityAlgo2AnalysisPer) * 3 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo2AnalysisPer = 0;
				 TestingLinearityAlgo2AnalysisPerFinal = 0;
			 }
			 if((ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10) < 10 )
			 {
				TestingLinearityAlgo3AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo3AnalysisPerFinal = (((100 - TestingLinearityAlgo3AnalysisPer) * 3 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo3AnalysisPer = 0;
				 TestingLinearityAlgo3AnalysisPerFinal = 0;
			 }
		Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) +  (100 - TestingLinearityAlgo2AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/400) * 100 ;
		 TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal)  + parseFloat(TestingLinearityAlgo2AnalysisPerFinal) + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
		}

		// algo 2 count is 0
		if(ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt == 0)
		{

			if((ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt - 10) < 10 )
			 {
					TestingLinearityAlgo1AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt - 10) / 10 ) * 100 );
					TestingLinearityAlgo1AnalysisPerFinal = (((100 - TestingLinearityAlgo1AnalysisPer) * 3 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo1AnalysisPer = 0;
				 TestingLinearityAlgo1AnalysisPerFinal = 0;
			 }
			
			 if((ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10) < 10 )
			 {
				TestingLinearityAlgo3AnalysisPer = (((ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo3AnalysisPerFinal = (((100 - TestingLinearityAlgo3AnalysisPer) * 3 ) / 100);
			 }else
			 {
				 TestingLinearityAlgo3AnalysisPer = 0;
				 TestingLinearityAlgo3AnalysisPerFinal = 0;
			 }
		Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) +  (100 - TestingLinearityAlgo1AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/400) * 100 ;
		 TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal) + parseFloat(TestingLinearityAlgo1AnalysisPerFinal)  + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
		}



		
		 
		 FC_Calibration.TotalPer = 10;
		 FC_Calibration.optained = (TestanalysisFinal + 0);
		 
		 FC_dataForAnalysis.push(FC_Calibration);
		 
		 FaultDetectioAnalysisPer = (((8 - ExpTrackData.fcFaultDetectionCnt) / 8 ) * 100 );
		// console.log(FaultDetectioAnalysisPer);
		 FaultDetectioAnalysisPerFinal = ((FaultDetectioAnalysisPer * 15 ) / 100);
		// console.log(FaultDetectioAnalysisPerFinal);

		 if(FaultDetectioAnalysisPerFinal < 0)
		 { FaultDetectioAnalysisPerFinal = 0 }
		 
		 FC_Fault.TotalPer = 15;
		 FC_Fault.optained = FaultDetectioAnalysisPerFinal 
		 
		 FC_dataForAnalysis.push(FC_Fault);
		 
		//finalPer =  ((TestAnalysisPer + (100 - ConfAnalysisPer) + (100 - WringDigAnalysisPer) + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal)/600 ) * 100;
//		 console.log(FC_dataForAnalysis);
		 
	var TransmitterDB = '';
	TransmitterDB += '<div class="col-md-12 col-sm-12" id="TransmitterDBDisplay">'
		
+ '<div class="col-md-12 col-sm-12">'
		+ '<div class="col-md-3 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Selected Application :'
		if(ExpTrackData.fcAppData.fcTestData.appId == 1)
		{
			TransmitterDB +=' Level Controller'
		}
		if(ExpTrackData.fcAppData.fcTestData.appId == 2)
		{
			TransmitterDB +='Temperature Controller'
		}
		if(ExpTrackData.fcAppData.fcTestData.appId == 3)
		{
			TransmitterDB +='Pressure Controller'
		}
		if(ExpTrackData.fcAppData.fcTestData.appId == 4)
		{
			TransmitterDB +=' Flow Controller'
		}
		TransmitterDB +='</label></div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+ '<div class=" " >'
//		if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 75)
//		  {
			  TransmitterDB +=' <div class="successMsg">Congratulations!!! Flow control system (Transmitter) experiment is completed successfully!! <br/><span id="AnalysisStatus"></span></div>'
//			  }else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 65 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 75)
//		    {
//				  TransmitterDB +=' <div class="successMsg">Flow control system (Transmitter) experiment is completed successfully!! <br/>Good performance</div>'
//					  }
//			  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 55 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 65)
//			    {
//				  TransmitterDB +=' <div class="successMsg">Flow control system (Transmitter) experiment is completed successfully!! <br/>Satisfactory performance</div>'
//					  }
//			  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 55 )
//			    {
//				  TransmitterDB +=' <div class="successMsg">Flow control system (Transmitter) experiment is completed successfully!! <br/>Needs improvement</div>'
//					  }
		 TransmitterDB +='</div>'
		+'</div>'
		
		+ '<div class="col-md-3 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Selected Transmitter  type : '+ExpTrackData.fcAppData.fcConfigData.trsmtrTpye+'</label>'
	   
		+'</div>'
		+'</div>'
		
		+'</div>'
		
		
		+ '<div class="col-xl-8 col-md-8 col-sm-12">'
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<label>Test Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Total Questions</p>'
		+'<span class="TotalcountNum">6</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Right Answer </p>'
		+'<span class="RightcountNum">'+ExpTrackData.fcAppData.fcTestData.rightQuesCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label> Range Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.fcAppData.fcConfigData.configcnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-xl-4 col-md-4 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Wired Digram Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.connData.chkConnCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Zero error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.fcCalibrationData.fcZeroErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Span error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.fcCalibrationData.fcSpanErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label> Linearity error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.fcCalibrationData.fcLinearityErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class=" form-group" >'
		+'<label>Accuracy error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.fcCalibrationData.fcAccuracyErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Zero adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">20</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.fcCalibrationData.fcZeroAdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.fcCalibrationData.fcZeroAdjustCnt - 20 )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Span adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.fcCalibrationData.fcSpanAdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.fcCalibrationData.fcSpanAdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
	
		+'</div>'
		+'</div>'
		
		if(ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt != 0)
		{
			TransmitterDB +='<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class=" form-group" >'
		+'<label>Linearity algorithm 1  adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		}
		if(ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt != 0)
		{
			TransmitterDB +='<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Linearity algorithm 2  adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
		
		
		+'</div>'
		+'</div>'
		}
		TransmitterDB +='<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Linearity algorithm 3  adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.fcCalibrationData.fcLinearAlgo3AdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Fault detection Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">'+( 8 - ExpTrackData.fcFaultDetectionCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">8</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.fcFaultDetectionCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+'</div>'
		
		+'<div class="col-xl-4 col-md-4 col-sm-12">'
		+ '<div class="col-md-12 col-sm-12 " >'
		+'<div  id="QueAnsChartDIv" style="height: 300px; width: 100%;"></div>'
		+ '</div>'
		+ '<div class="col-md-12 col-sm-12 " >'
		+'<div  id="StudentAnalysisDIv" >'
		+'<div class="table-responsive">'
  		
     +'<table class="table table-hover">'
    +'<thead>'
      +'<tr>'
        +'<th>Competency (Transmitter)</th>'
        +'<th>Status</th>'
     +' </tr>'
   +' </thead>'
    +'<tbody>'
      +'<tr>'
        +'<td>Basic knowledge</td>'
      if( TestAnalysisPer > 75)
	  {
		 TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			 attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
	   
      
     TransmitterDB +=' </tr>'
    	 
    	 +'<tr>'
         +'<td>Configuration</td>'
       if( (100 - ConfAnalysisPer) > 75)
 	  {
 		 TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
 			attaindedcnt++;
 		  }
 	  else
 	  {
 		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
 			notattainded++;
 		  }
 	   
       
      TransmitterDB +=' </tr>'
    	
       +'<tr>'
        +'<td>Connection diagram</td>'
       if((100 - WringDigAnalysisPer) > 66)
	  {
		 TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			 attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
      
    TransmitterDB +=' </tr>'
	  +'<tr>'
        +'<td>Characterization</td>'
       if(Test_AttendedPer > 75)
	  {
		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			  attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
      
      TransmitterDB +=' </tr>'
	  +'<tr>'
        +'<td>Calibration</td>'
        if(ExpTrackData.fcCalibrationData.fcLinearAlgo1AdjustCnt != 0 && ExpTrackData.fcCalibrationData.fcLinearAlgo2AdjustCnt != 0)
    	{
        if( (TestanalysisFinal * 10 ) > 75)
	  {
		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			  attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
    	}else
    		{

            if( (TestanalysisFinal * 10 ) > 60)
    	  {
    		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
    			  attaindedcnt++;
    		  }
    	  else
    	  {
    		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
    			 notattainded++;
    		  }
        	
    		}
      
     TransmitterDB +=' </tr>'
	  +'<tr>'
        +'<td>Fault detection</td>'
       if(FaultDetectioAnalysisPer > 75)
	  {
		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			  attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
      
     TransmitterDB +='  </tr>'
	  
	   +'<tr>'
        +'<td class="TotalcountNum">Overall performance</td>'
//       if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 75)
//	  {
//		  TransmitterDB +=' <td class="RightNum"><span >Excellent</span></td>'
//		  }else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 65 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 75)
//	    {
//			  TransmitterDB +=' <td class="RightNum"><span >Good</span></td>'
//				  }
//		  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 55 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 65)
//		    {
//			  TransmitterDB +=' <td class="RightNum"><span >Satisfactory</span></td>'
//				  }
//		  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 55 )
//		    {
//			  TransmitterDB +=' <td class="RightNum"><span >Needs improvement</span></td>'
//				  }
        if(attaindedcnt >= 5)   
    	  {
    		  TransmitterDB +=' <td class="RightNum"><span >Excellent</span></td>'
    		  AnalysisSts = "Excellent performance"; 
    		  }else if(attaindedcnt == 4)
    	    {
    			  TransmitterDB +=' <td class="RightNum"><span >Good</span></td>'
    			   AnalysisSts = "Good performance"; 
    				  }
    		  else if(attaindedcnt == 3)
    		    {
    			  TransmitterDB +=' <td class="RightNum"><span >Satisfactory</span></td>'
    			   AnalysisSts = "Satisfactory performance"; 
    				  }
    		  else if((attaindedcnt <= 2) || ( notattainded >= 2 ) )
    		    {
    			  TransmitterDB +=' <td class="RightNum"><span >Needs improvement</span></td>'
    			   AnalysisSts = "Needs improvement"; 
    				  }
     TransmitterDB +=' </tr>'
	  
    +'</tbody>'
 +' </table>'
  		
		+'</div>'
		+'</div>'
		+'</div>'
		
		
		//time calculation table
		+ '<div class="col-xl-12 col-md-12 col-sm-12 " >'
		+'<div  id="StudentAnalysisDIv" >'
		+'<div class="table-responsive">'
  		
     +'<table class="table table-hover">'
    +'<thead>'
      +'<tr>'
        +'<th>Competency (Transmitter)</th>'
        +'<th>Time</th>'
     +' </tr>'
   +' </thead>'
    +'<tbody>'
      +'<tr>'
        +'<td>Basic knowledge</td>'
		 +'<td > <span class="InfoNum">'+fctime1+'</span></td>'
		 +' </tr>'
    	 
    	 +'<tr>'
         +'<td>Configuration</td>'
 		 +' <td > <span class="InfoNum">'+Callhr+":"+CallMin+":"+Callsec+'</span></td>'
 		 +' </tr>'
    	
       +'<tr>'
        +'<td>Connection diagram</td>'
		 +' <td > <span class="InfoNum">'+fctime4+'</span></td>'
		 +' </tr>'
    
	  +'<tr>'
        +'<td>Characterization</td>'
		 +' <td > <span class="InfoNum">'+fctime5+'</span></td>'
      +' </tr>'
      
	  +'<tr>'
        +'<td>Calibration</td>'
		 +' <td > <span class="InfoNum">'+fctime5+'</span></td>'
     +' </tr>'
     
	  +'<tr>'
        +'<td>Fault detection</td>'
		 +' <td > <span class="InfoNum">'+fctime7+'</span></td>'
     +'  </tr>'
	  
	   +'<tr>'
        +'<td class="TotalcountNum">Overall Time</td>'
       +'<td class="InfoNum"><span >'+ parseInt(hour)+":"+ parseInt(minute)+":"+ parseInt(second)+'</span></td>'
	+' </tr>'
	  
    +'</tbody>'
 +' </table>'
  		
		+'</div>'
		+'</div>'
		+'</div>'
	
		+ '</div>'
		
		+ '</div>'
		
		
//		$("#mainDiv").html('');
		$("#mainDiv").html(TransmitterDB);
     $("#AnalysisStatus").html(AnalysisSts);
		$("#TransmitterDBDisplay").ready(function(){
			
			
var chart1 = new CanvasJS.Chart("QueAnsChartDIv", {

	animationEnabled: true,
	title:{
		text: "Analysis",
		horizontalAlign: "center"
	},
	legend:{
		cursor: "pointer",
		//itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		//startAngle: 100,
		//innerRadius: 60,
		indexLabelFontSize: 13,
		//indexLabel: "{y} answers ",
		toolTipContent: "<b>{label}</b> ",
		
		//FC_dataForAnalysis
		
		dataPoints: [
			{ y: (FC_dataForAnalysis[0].optained), label:"Basic knowledge & Configuration "+FC_dataForAnalysis[0].optained.toFixed(2)+"/"+FC_dataForAnalysis[0].TotalPer ,legendText: "Basic knowledge & Configuration"},
			{ y: (FC_dataForAnalysis[1].optained), label: "Connection diagram "+FC_dataForAnalysis[1].optained.toFixed(2)+"/"+FC_dataForAnalysis[1].TotalPer ,legendText: "Connection diagram" },
			{ y: (FC_dataForAnalysis[2].optained), label: "Characterization "+FC_dataForAnalysis[2].optained.toFixed(2)+"/"+FC_dataForAnalysis[2].TotalPer ,legendText: "FCharacterization"},
			{ y: (FC_dataForAnalysis[3].optained ), label: "Calibration  "+FC_dataForAnalysis[3].optained.toFixed(2)+"/"+FC_dataForAnalysis[3].TotalPer ,legendText: "Calibration "},
			{ y: (FC_dataForAnalysis[4].optained), label: "Fault detection  "+FC_dataForAnalysis[4].optained.toFixed(2)+"/"+FC_dataForAnalysis[4].TotalPer ,legendText: "Fault detection " },
			]
	}]
});
chart1.render();


});
}
	 

 });	 