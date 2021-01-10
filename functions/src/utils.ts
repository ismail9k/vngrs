/**
 * Sanitize an object data
 * @param fields 
 * @param object 
 */
export function sanitizeData(fields: string[], object: any): any {
  if (!fields.length) return {};
  const output: { [key: string]: any; } = {};
  return fields.reduce((output, key) => {
    if (typeof object[key] !== 'undefined') {
      output[key] = object[key];
    }
    return output;
  }, output);
}