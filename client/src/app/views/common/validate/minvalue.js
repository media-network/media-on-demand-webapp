const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined

export default minValue
