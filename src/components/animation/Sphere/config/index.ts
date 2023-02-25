// Graphics
import { Vector3, Color, Spherical, Vector2 } from 'three'

// Sphere
export const size = {
  width: 512,
  height: 512
}

// Time
export const delta = 16

// Lights
export const lights = {
  a: {
    color: '#835298',
    intensity: 1,
    spherical: new Spherical(2, Math.PI / 2, 0.01)
  },
  b: {
    color: '#b6b5e2',
    intensity: 0,
    // intensity: 2.01,
    spherical: new Spherical(1, 1.14, -0.5)
  },
  c: {
    color: '#f48e92',
    intensity: 0,
    // intensity: 0.64,
    spherical: new Spherical(1, 3.14, -1.5)
  }
}

// Uniforms
export const uniforms = {
  // Color
  uLightAColor: new Color(lights.a.color).convertSRGBToLinear(),
  uLightAIntensity: lights.a.intensity,
  uLightAPosition: new Vector3(0.0).setFromSpherical(lights.a.spherical),
  uLightBColor: new Color(lights.b.color).convertSRGBToLinear(),
  uLightBIntensity: lights.b.intensity,
  uLightBPosition: new Vector3(0.0).setFromSpherical(lights.b.spherical),
  uLightCColor: new Color(lights.c.color).convertSRGBToLinear(),
  uLightCIntensity: lights.c.intensity,
  uLightCPosition: new Vector3(0.0).setFromSpherical(lights.c.spherical),
  // Subdivision
  uSubdivision: new Vector2(size.width, size.height),
  // Distortion
  uDistortionFrecuency: 0.47,
  uDistortionStrength: 0,
  // Displacement
  uDisplacementFrecuency: 2.04,
  uDisplacementStrength: 0.10,
  // Fresnel
  uFresnelOffset: 0.75,
  uFresnelMultiplier: 1,
  uFresnelPower: 0.90,
  // Time
  uTime: 0.001733
}

// Controls
export const controls = {
  lights: {
    colorALight: {
      value: lights.a.color
    },
    intensityALight: {
      value: uniforms.uLightAIntensity,
      min: 0,
      max: 5,
      step: 0.001
    },
    phiALight: {
      value: lights.a.spherical.phi,
      min: 0,
      max: Math.PI,
      step: 0.001
    },
    thetaALight: {
      value: lights.a.spherical.theta,
      min: -Math.PI,
      max: Math.PI,
      step: 0.001
    },
    colorBLight: {
      value: lights.b.color
    },
    intensityBLight: {
      value: uniforms.uLightBIntensity,
      min: 0,
      max: 5,
      step: 0.001
    },
    phiBLight: {
      value: lights.b.spherical.phi,
      min: 0,
      max: Math.PI,
      step: 0.001
    },
    thetaBLight: {
      value: lights.b.spherical.theta,
      min: -Math.PI,
      max: Math.PI,
      step: 0.001
    },
    colorCLight: {
      value: lights.c.color
    },
    intensityCLight: {
      value: uniforms.uLightCIntensity,
      min: 0,
      max: 5,
      step: 0.001
    },
    phiCLight: {
      value: lights.c.spherical.phi,
      min: 0,
      max: Math.PI,
      step: 0.001
    },
    thetaCLight: {
      value: lights.c.spherical.theta,
      min: -Math.PI,
      max: Math.PI,
      step: 0.001
    }
  },
  distortion: {
    frecuencyDistortion: {
      value: uniforms.uDistortionFrecuency,
      min: 0,
      max: 10,
      step: 0.001
    },
    strengthDistortion: {
      value: uniforms.uDistortionStrength,
      min: 0,
      max: 10,
      step: 0.001
    }
  },
  displacement: {
    frecuencyDisplacement: {
      value: uniforms.uDisplacementFrecuency,
      min: 0,
      max: 5,
      step: 0.001
    },
    strengthDisplacement: {
      value: uniforms.uDisplacementStrength,
      min: 0,
      max: 1,
      step: 0.001
    }
  },
  fresnel: {
    offsetFresnel: {
      value: uniforms.uFresnelOffset,
      min: -2,
      max: 2,
      step: 0.001
    },
    multiplierFresnel: {
      value: uniforms.uFresnelMultiplier,
      min: 0,
      max: 5,
      step: 0.001
    },
    powerFresnel: {
      value: uniforms.uFresnelPower,
      min: 0,
      max: 5,
      step: 0.001
    }
  },
  time: {
    frecuencyTime: {
      value: uniforms.uTime,
      min: 0,
      max: 0.01,
      step: 0.000001
    }
  }
}
