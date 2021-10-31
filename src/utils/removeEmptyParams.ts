function removeEmptyParams(params: any) {
  if (typeof params === 'object') {
    const copiedParams = { ...params };
    for (const key of Object.keys(copiedParams)) {
      if (copiedParams[key] === '') {
        delete copiedParams[key];
      }
    }

    return copiedParams;
  }

  return {};
}

export default removeEmptyParams
