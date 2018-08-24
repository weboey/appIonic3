import { NgModule } from '@angular/core';
import { TransformTimePipe } from './transform-time/transform-time';
import { ImgPreHandlerPipe } from './img-prehandler/img-prehandler';
@NgModule({
	declarations: [TransformTimePipe,
    ImgPreHandlerPipe],
	imports: [],
	exports: [TransformTimePipe,
    ImgPreHandlerPipe]
})
export class PipesModule {}
