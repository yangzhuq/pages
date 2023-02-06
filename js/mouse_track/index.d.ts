declare const defaultConfig: {
    SIM_RESOLUTION: number;
    DYE_RESOLUTION: number;
    CAPTURE_RESOLUTION: number;
    DENSITY_DISSIPATION: number;
    VELOCITY_DISSIPATION: number;
    PRESSURE: number;
    PRESSURE_ITERATIONS: number;
    CURL: number;
    SPLAT_RADIUS: number;
    SPLAT_FORCE: number;
    SHADING: boolean;
    COLORFUL: boolean;
    COLOR_UPDATE_SPEED: number;
    PAUSED: boolean;
    BACK_COLOR: {
        r: number;
        g: number;
        b: number;
    };
    TRANSPARENT: boolean;
    BLOOM: boolean;
    BLOOM_ITERATIONS: number;
    BLOOM_RESOLUTION: number;
    BLOOM_INTENSITY: number;
    BLOOM_THRESHOLD: number;
    BLOOM_SOFT_KNEE: number;
    SUNRAYS: boolean;
    SUNRAYS_RESOLUTION: number;
    SUNRAYS_WEIGHT: number;
};
declare type MouseTrackConfig = typeof defaultConfig;
interface MouseTrackCanvas extends HTMLCanvasElement {
    resize(): boolean;
}
/**
 * MouseTrack
 * @date 2023-02-05
 * @param {any} {canvas}
 * @returns {any}
 */
export default class MouseTrack {
    canvas: MouseTrackCanvas;
    config: MouseTrackConfig;
    constructor(canvas: HTMLCanvasElement, config?: MouseTrackConfig);
    init(): void;
    resizeCanvas(): boolean;
}
export {};
