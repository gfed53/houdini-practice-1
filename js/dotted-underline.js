// TODO: add this. it's probably important
// if (registerPaint) {

// }

class DottedUnderline {

  static get inputProperties() {
    return ['--number-of-circles', '--fill-color', 'font-size'];
  }

  paint(ctx, size, props) {
    // console.log('ctx', ctx);
    // console.log('size', size);
    // console.log('props', props);

    // You also have access to computed prop values.
    // console.log('font-size', props.get('font-size').value);

    for (let i = 0; i < props.get('--number-of-circles'); i++) {
      let fraction = i * 2;
      ctx.beginPath();
      ctx.fillStyle = props.get('--fill-color');
      ctx.arc(20 + (fraction * 10), size.height - 10, 8, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.beginPath();
    ctx.moveTo(props.get('--number-of-circles') * 23, size.height - 10);
    ctx.lineTo(size.width, size.height - 10);
    ctx.stroke();
  }
}

registerPaint('dotted-underline', DottedUnderline);
