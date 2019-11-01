class FancyCrossedOut {

  static get inputProperties() {
    return [
      'line-height',
      '--stroke-color',
      '--fancy-crossed-out-skew',
      '--fancy-crossed-out-evenness',
      '--fancy-crossed-out-evenness-random',
      '--fancy-crossed-out-stroke-width',
    ];
  }

  paint(ctx, size, props) {
    // console.log('ctx', ctx);
    // console.log('size', size);
    // console.log('props', props);

    let x = 0,
        xEnd = size.width,
        y = props.get('line-height').value * 0.66666,
        skew = props.get('--fancy-crossed-out-skew').value,
        evenness = props.get('--fancy-crossed-out-evenness').value,
        strokeWidth = props.get('--fancy-crossed-out-stroke-width'),
        lineHeight = props.get('line-height').value,
        totalLines = Math.round(size.height / props.get('line-height').value),
        // If I don't have this limit, I think the browser will crash for the random scribble.
        fallbackXLimit = 0;

    // An example of the CSS Typed OM. Don't remove these logs!

    console.log('line-height', props.get('line-height'));
    // console.log('skew', skew);
    // console.log('evenness', evenness);

    //

    ctx.lineWidth = strokeWidth.value;

    for (let i = 0; i < totalLines; i++) {

      let yOffset = y + (i * lineHeight),
          xLeft = x;

      // Limit each zig-zag line slash width to content width
      while (xLeft < xEnd && fallbackXLimit < 1000) {


        // make it a random scribble
        if (props.get('--fancy-crossed-out-evenness').value === -1) {
          evenness = Math.random();
        }
        if (props.get('--fancy-crossed-out-skew').value === -1) {
          skew = Math.floor(Math.random() * 70);
        }

        let xRight = xLeft + skew,
            xMid = xLeft + (skew / evenness);

        ctx.beginPath();
        ctx.moveTo(xLeft, yOffset);
        ctx.lineTo(xMid, (yOffset - 10));
        ctx.lineTo(xRight, (yOffset));
        ctx.stroke();

        xLeft = xRight;
        fallbackXLimit++;
      }

    }
  }
}

registerPaint('fancy-crossed-out', FancyCrossedOut);