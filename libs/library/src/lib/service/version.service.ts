import { Version } from "../models/version";

export class VersionService{
    
  public parseVersion(str: string): Version {
    const result: Version = { branch: '', sha: '', shortsha:'' ,version: '' };
    const regex =
      /(?<version>.*)\+Branch\.(?<branch>[^\.]*)\.Sha\.(?<sha>.*)/gm;
    let m;

    while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      result.branch = m[2];
      result.version = m[1];
      result.sha = m[3];
      result.shortsha=result.sha.substring(0,7);
    }
    return result;
  }
}