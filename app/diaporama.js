var data = {
  'timeline': [
    {
      'image': 'images/kenburns/01.jpg',
      'duration': 2000,
      'kenburns': {
        'from': [0.8, [0.5, 0.5]],
        'to':   [1.0, [1.0, 1.0]]
      },
      'transitionNext': { 'duration': 1000, 'name': 'burn' }
    },
    {
      'image': 'images/kenburns/02.jpg',
      'duration': 2000,
      'kenburns': {
        'from': [0.8, [0.5, 0.5]],
        'to':   [1.0, [0.0, 0.0]]
      },
      'transitionNext': { 'duration': 1000, 'name': 'burn' }
    },
    {
      'image': 'images/kenburns/03.jpg',
      'duration': 2000,
      'kenburns': {
        'from': [0.5, [0.5, 0.5]],
        'to':   [1.0, [0.0, 0.0]]
      },
      'transitionNext': { 'duration': 1000, 'name': 'burn' }
    },
    {
      'image': 'images/kenburns/04.jpg',
      'duration': 2000,
      'kenburns': {
        'from': [0.8, [0.0, 0.0]],
        'to':   [1.0, [1.0, 1.0]]
      },
      'transitionNext': { 'duration': 1000, 'name': 'burn' }
    },
    {
      'image': 'images/kenburns/05.jpg',
      'duration': 2000,
      'kenburns': {
        'from': [0.25, [0.5, 0.5]],
        'to':   [1.0, [0.0, 0.0]]
      },
      'transitionNext': { 'duration': 1000, 'name': 'burn' }
    }
  ],

  'transitions': [
    {
      'name': 'burn',
      'glsl': '#ifdef GL_ES \n' +
               'precision highp float; \n' +
               '#endif \n' +
               'uniform sampler2D from, to; \n' +
               'uniform float progress; \n' +
               'uniform vec2 resolution; \n' +

               'uniform vec3 color; \n' +

               'void main() { \n' +
                'vec2 p = gl_FragCoord.xy / resolution.xy; \n' +
                'gl_FragColor = mix( \n' +
                  'texture2D(from, p) + vec4(progress*color, 1.0), \n' +
                  'texture2D(to, p) + vec4((1.0-progress)*color, 1.0), \n' +
                  'progress); \n' +
               '}',
      'uniforms': {"color":[0.9,0.4,0.2]}
    }
  ]
};