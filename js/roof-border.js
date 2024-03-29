class RoofBorder {

  static get inputProperties() {
    // return ['--number-of-circles'];
  }

  paint(ctx, size, props) {
    // console.log('ctx', ctx);
    // console.log('size', size);
    // console.log('props', props);

    const topLeft = [23, 10],
          topRight = [size.width - 20, 10],
          bottomLeft = [10, size.height],
          bottomRight = [(size.width - 10), size.height];

    // line: top left -> top right

    ctx.beginPath();
    ctx.moveTo(...topLeft);
    ctx.lineTo(...topRight);
    ctx.stroke();

    // line: bottom left -> bottom right

    ctx.beginPath();
    ctx.moveTo(...bottomLeft);
    ctx.lineTo(...bottomRight);
    ctx.stroke();

    // line: top left -> bottom left

    ctx.beginPath();
    ctx.moveTo(...topLeft);
    ctx.lineTo(...bottomLeft);
    ctx.stroke();

    // line: top right -> bottom right

    ctx.beginPath();
    ctx.moveTo(...topRight);
    ctx.lineTo(...bottomRight);
    ctx.stroke();

  }
}

registerPaint('roof-border', RoofBorder);