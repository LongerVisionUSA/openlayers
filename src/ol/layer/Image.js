/**
 * @module ol/layer/Image
 */
import BaseImageLayer from './BaseImage.js';
import CanvasImageLayerRenderer from '../renderer/canvas/ImageLayer.js';


/**
 * @typedef {import("./BaseImage.js").Options} Options
 */


/**
 * @classdesc
 * Server-rendered images that are available for arbitrary extents and
 * resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @fires import("../render/Event.js").RenderEvent
 * @api
 */
class ImageLayer extends BaseImageLayer {

  /**
   * @param {Options=} opt_options Layer options.
   */
  constructor(opt_options) {
    super(opt_options);
  }

  /**
   * Create a renderer for this layer.
   * @param {import("../renderer/Map.js").default} mapRenderer The map renderer.
   * @return {import("../renderer/Layer.js").default} A layer renderer.
   * @protected
   */
  createRenderer(mapRenderer) {
    return new CanvasImageLayerRenderer(this);
  }

}

export default ImageLayer;
