// let eyeBall = document.querySelector(".eyeball"),
//     pupil = document.querySelector(".pupil"),
//     eyeArea = eyeBall.getBoundingClientRect(),
//     pupilArea = pupil.getBoundingClientRect(),
//     R = eyeArea.width/2,
//     r = pupilArea.width/2,
//     centerX = eyeArea.left + R,
//     centerY = eyeArea.top + R;

// document.addEventListener("mousemove", (e) => {
//   let x = e.clientX - centerX,
//       y = e.clientY - centerY,
//       theta = Math.atan2(y,x),
//       angle = theta*180/Math.PI + 360;

//   pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
//   pupil.style.transformOrigin = `${r +"px"} center`;
// });

/// /////////////////
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians)),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
  ].join(' ');

  return d;
}
