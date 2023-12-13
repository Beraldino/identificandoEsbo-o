array1=['pen','paper','book','bottle'];
randomNo = Math.floor((Math.random()*array1.length)+1);

Element_of_array = array1[randomNo];

console.log(randomNumber);

document.getElementById('showsketch'). innerHTML = 'Esboço a ser desenhado';

timerConter = 0;
TimerCheck = '';
drawSketch = '';
score = 0;

if(condition){
    timerConter++
    }
    function setup() {
        canvas = createCanvas(280, 280);
        canvas.center();
        background("white");
        canvas.mouseReleased(classifyCanvas);
        synth = window.speechSynthesis;
    }
    function clearCanvas() {
        background("white")
    }
    function preload() {
    
    
        classifier = ml5.imageClassifier('DoodleNet');
      }
      
    function draw() {
        strokeWeight(13);
    
        stroke(0);
    
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
        
    }
    function classifyCanvas() {
        classifier.classify(canvas, gotResult);
      }
    function gotResult(error, results) {
        if (error) {
          console.error(error);
        }
        console.log(results);
        var result = results[0].label;
        document.getElementById('label').innerHTML = 'Nome: ' + result.replace('_', ' ');
        document.getElementById('pont').innerHTML = 'Pontuação: ' + 1;
      
      
        document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';
      
        utterThis = new SpeechSynthesisUtterance(result.replace('_', ' '));
        synth.speak(utterThis);

      }

      
      

