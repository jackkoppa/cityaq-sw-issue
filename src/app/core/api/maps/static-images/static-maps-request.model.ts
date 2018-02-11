import { BaseMapsRequest } from '../base-maps-request.model';

import { ImageFileType } from './image-file-type.model';
import { MapType  } from './map-type.model';

export interface StaticMapsRequest extends BaseMapsRequest {
    center: string;
    zoom: number;
    size: string;
    key: string;
    signature?: string;
    scale?: number;
    format?: ImageFileType;
    maptype?: MapType;
    language?: string;
    region?: string;
    markers?: string;
    path?: string;
    visible?: string;
    style?: string[];
}