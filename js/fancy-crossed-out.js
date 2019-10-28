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
        lineHeightOffset = props.get('line-height').value,
        debugCountY = 0;

    // An example of the CSS Typed OM. Don't remove these logs!
    console.log('line-height', props.get('line-height'));
    console.log('skew', skew);
    console.log('evenness', evenness);

    ctx.lineWidth = strokeWidth.value;

    let totalLines = Math.round(size.height / props.get('line-height').value);

    console.log('totalLines', totalLines);

    for (let i = 0; i < totalLines; i++) {
      // console.log('y', y);
      let yOffset = y + (i * lineHeightOffset);
      let xLeft = x;

      // for testing
      let debugCountX = 0;


      // Limit each zig-zag line slash width to content width
      while (xLeft < xEnd && debugCountX < 100) {

        // random scribble
        if (props.get('--fancy-crossed-out-evenness').value === -1) {
          evenness = Math.random();
        }
        if (props.get('--fancy-crossed-out-skew').value === -1) {
          skew = Math.floor(Math.random() * 70);
        }

        let xRight = xLeft + skew;
        let xMid = xLeft + (skew / evenness);
        ctx.beginPath();
        ctx.moveTo(xLeft, yOffset);
        ctx.lineTo(xMid, (yOffset - 10));
        ctx.lineTo(xRight, (yOffset));
        ctx.stroke();

        xLeft = xRight;
        debugCountX++;

        // console.log('debugCountX', debugCountX);

      }

      // lineCount++;
      debugCountY++;
      console.log('debugCountY', debugCountY);
    }


  }
}

registerPaint('fancy-crossed-out', FancyCrossedOut);