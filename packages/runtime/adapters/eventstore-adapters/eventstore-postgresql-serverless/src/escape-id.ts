const escapeId = (str: any): string =>
  `"${String(str).replace(/(["])/gi, '$1$1')}"`

export default escapeId
