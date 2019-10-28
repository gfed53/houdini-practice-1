class SlashesBg {

  static get inputProperties() {
    return [
      '--stroke-color',
      '--fill-color',
      '--spacing',
      '--slashes-bg-skew',
      '--rect-width',
      '--number-of-rects'
    ];
  }

  paint(ctx, size, props) {
    // console.log('ctx', ctx);
    // console.log('size', size);
    // console.log('props', props);

    let x = size.width * 0.95,
        y = (size.height * 0.1),
        rectWidth = props.get( '--rect-width' ),
        rectHeight = size.height - (size.height * 0.15),
        spacing = props.get( '--spacing' ),
        skew = props.get( '--slashes-bg-skew' ),
        strokeColor = props.get( '--stroke-color' ),
        fillColor = props.get( '--fill-color' );

    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;

    for(let i = 0; i < props.get( '--number-of-rects' ); i++) {

      let tempX = x - (i * spacing);

      let topLeft = [tempX - rectWidth, y],
          topRight = [tempX, y],
          bottomLeft = [(tempX - skew) - rectWidth, y + rectHeight],
          bottomRight = [(tempX - skew), y + rectHeight];


      ctx.beginPath();
      ctx.moveTo(...topRight);
      ctx.lineTo(...topLeft);
      ctx.lineTo(...bottomLeft);
      ctx.lineTo(...bottomRight);
      ctx.lineTo(...topRight);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }
}

registerPaint('slashes-bg', SlashesBg);