/*function eye() {
  
    document.getElementsByClassName("portfolio-icon").style.display = "block";
    this.style.filter = "none";
}*/


var image = document.getElementById('portfolio-image');
var icon = document.getElementById('eye');
image.addEventListener("mouseover",function(){
    this.style.filter = "none";
});




















/*
var ProgressBar=require("progressbar.js");
var bar = new ProgressBar.Circle(progress-project, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke',  state.color);
    circle.path.setAttribute('stroke-width', state.width);
 

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.7);  // Number from 0.0 to 1.0
/*