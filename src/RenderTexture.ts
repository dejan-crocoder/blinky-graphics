import { Size } from "./Math";

type RenderTextureBufferGroup = {
  txtBuffer: Buffer;
  bgrBuffer: Buffer;
  fgrBuffer: Buffer;
}

export class RenderTexture {

  public readonly bufferGroup: RenderTextureBufferGroup;

  constructor(
    public readonly size: Size,
    bufferGroup?: RenderTextureBufferGroup
  ) {
    this.bufferGroup = bufferGroup || {
      txtBuffer: Buffer.alloc(size.width * size.height),
      bgrBuffer: Buffer.alloc(size.width * size.height),
      fgrBuffer: Buffer.alloc(size.width * size.height),
    }
  }

  // vSlice(size: Size, lineOffset: number): RenderTexture {
  //   return new RenderTexture(size, {
  //     txtBuffer: this.bufferGroup.txtBuffer.sli
  //   });
  // }
  
}