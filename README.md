# hierarchical-3dtiles-builder
Tool for building hierarchical 3D tiles

## Core Features

- Converting multiple 3d models into one or more 3D tilesets
    - `.obj` format supported
- Supporting hierarchical LOD structure.
    - each level's content could be set in the **same tileset**, or be divided into **different tilesets** and connect each other by `url` field
    - settings for each level:
        - **geometricError**
        - **externalChildSet** : whether the next level's content should be stored in another tileset or not
- Supporting transformation
    - **scale**, **rotatation**, **translation**, and **shearing** could be set by a `4 x 4 matrix` in settings

## Setting options inherited from [objTo3d-tiles](https://github.com/PrincessGod/objTo3d-tiles)

- model origin's position
    - latitude
    - longitude
    - height
- type of bounding volume
    - region
    - box
    - sphere

## Input and Settings

#### Available settings options:

1. `hierarchyFile` : path to a json file describing hierarchy of models
2. `transform`: a transform matrix represented by one dimensional array
3. `levels`:
    - `geometricError`
    - `externalChildSet`

sample:

```json
{
    "hierarchyFile": "./altizure_hierarchy.json",
    "transform": [
        1, 0, 0, 0,
        0, -1, 0, 0,
        0, 0, -1, 0,
        0, 0, 0, 1
    ],
    "levels": [
        {
            "level": 0,
            "geometricError": 8,
            "externalChildSet": false
        },
        {
            "level": 1,
            "geometricError": 4,
            "externalChildSet": false
        },
        {
            "level": 2,
            "geometricError": 2,
            "externalChildSet": true
        },
        {
            "level": 3,
            "geometricError": 1,
            "externalChildSet": false
        },
    ]
}
```

#### Keys in Hierarchy File
- `models`: models' tree
    - `level`
    - `filename`
    - `children`
- `basePath`: base path of model file

sample:
```json
{
  "basePath": "/home/user/models",
  "models": [
    {
      "level": 0,
      "filename": "tile_0_0_0_tex.obj",
      "children": [
        {
          "level": 1,
          "filename": "tile_1_0_0_tex.obj",
          "children": [
            {
              "level": 2,
              "filename": "tile_2_0_0_tex.obj",
              "children": []
            },
            {
              "level": 2,
              "filename": "tile_2_0_64_tex.obj",
              "children": []
            },
            {
              "level": 2,
              "filename": "tile_2_64_0_tex.obj",
              "children": []
            },
            {
              "level": 2,
              "filename": "tile_2_64_64_tex.obj",
              "children": []
            }
          ]
        },
        {
          "level": 1,
          "filename": "tile_1_128_0_tex.obj",
          "children": [
            {
              "level": 2,
              "filename": "tile_2_128_0_tex.obj",
              "children": []
            },
            {
              "level": 2,
              "filename": "tile_2_128_64_tex.obj",
              "children": []
            },
            {
              "level": 2,
              "filename": "tile_2_192_0_tex.obj",
              "children": []
            },
            {
              "level": 2,
              "filename": "tile_2_192_64_tex.obj",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
```