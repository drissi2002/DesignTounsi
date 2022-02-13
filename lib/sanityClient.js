import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ox1ysfdo',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skW2bOCdyaFT4xLBcNiBcVEPQj7yBZt4b9jACzxu61z6PnXLjiwJuCTB4ASbkB4yRZQqKLGq8T4XZMMKqDy2KdU3rM7DgLa5n8vOr6nD5JJvHyuMRb3LGJL2NN4tuDXiapLMczEfvAAOft067QNzeVXbiZn0wM3ZvjPzIrBbL8uUdoDJZZXh',
  useCdn: false,
})