import { PageProps } from "gatsby";

const useQueryParams: any = (queryStr: string) => {
  let keyValPairs: string[] = queryStr.replace(/^\?/, "").split("&");
  let params: any = {};

  for (const pairNum in keyValPairs) {
    let vals = keyValPairs[pairNum].split("=");
    params[vals[0]] = vals[1];
  }

  return params;
};

export default useQueryParams;
