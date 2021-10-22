 // TeachableMachine link : https://teachablemachine.withgoogle.com/models/wATHE1Emu/ //

 function startClassification(){
     navigator.mediaDevices.getUserMedia({ audio:true });
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wATHE1Emu/model.json' , modelReady);
 }

 function modelReady(){
     classifier.classify(gotResults);
 }

 