export const MockOpenAPIPath = {
  post: {
    tags: [
      'pet',
    ],
    summary: 'uploads an image',
    description: '',
    operationId: 'uploadFile',
    consumes: [
      'multipart/form-data',
    ],
    produces: [
      'application/json',
    ],
    parameters: [
      {
        name: 'petId',
        in: 'path',
        description: 'ID of pet to update',
        required: true,
        type: 'integer',
        format: 'int64',
      },
      {
        name: 'additionalMetadata',
        in: 'formData',
        description: 'Additional data to pass to server',
        required: false,
        type: 'string',
      },
      {
        name: 'file',
        in: 'formData',
        description: 'file to upload',
        required: false,
        type: 'file',
      },
    ],
    responses: {
      200: {
        description: 'successful operation',
        schema: {
          $ref: '#/definitions/ApiResponse',
        },
      },
    },
    security: [
      {
        petstore_auth: [
          'write:pets',
          'read:pets',
        ],
      },
    ],
  },
}
