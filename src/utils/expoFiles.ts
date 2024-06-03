import * as FileSystem from "expo-file-system";

export const getDocDir = (): string => FileSystem.documentDirectory;
export const getDocPath = (path: string) =>
  path[0] === "/" ? getDocDir() + path.substring(1) : getDocDir() + path;

export const getCacheDir = (): string => FileSystem.cacheDirectory;
export const getCachePath = (path: string) =>
  path[0] === "/" ? getCacheDir() + path.substring(1) : getCacheDir() + path;

export const getFilename = (path: string, delim: string = "/") =>
  path.split(delim).pop();

export const getExtension = (path: string, delim: string = ".") =>
  path.split(delim).pop();
//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

export const getInfoP = FileSystem.getInfoAsync;

export const existsP = (dirOrFile: string) =>
  new Promise(async (resolve, reject) => {
    getInfoP(dirOrFile)
      .then((info) => resolve(info.exists))
      .catch(reject);
  });

export const isDirP = (dir: string) =>
  new Promise(async (resolve, reject) => {
    getInfoP(dir)
      .then((info) => resolve(info.isDirectory))
      .catch(reject);
  });

//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

export const mkdirP = FileSystem.makeDirectoryAsync;
export const rmdirP = FileSystem.deleteAsync;
export const readDirP = FileSystem.readDirectoryAsync;
//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

export const readStringP = FileSystem.readAsStringAsync;
export const writeStringP = FileSystem.writeAsStringAsync;
export const readImageAsBase64P = (uri: string) =>
  new Promise<string>(async (resolve, reject) => {
    try {
      const ext = getExtension(uri);
      const base64 = await readStringP(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      resolve(`data:image/${ext};base64,` + base64);
    } catch (e) {
      reject(e);
    }
  });

//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

export const downloadP = FileSystem.downloadAsync;
export const downloadToDocDicP = (uri: string, filename: string) =>
  new Promise<FileSystem.FileSystemDownloadResult>(async (resolve, reject) => {
    downloadP(uri, getDocPath(filename)).then(resolve).catch(reject);
  });
export const downloadToCacheDirP = (uri: string, filename: string) =>
  new Promise<FileSystem.FileSystemDownloadResult>(async (resolve, reject) => {
    downloadP(uri, getCachePath(filename)).then(resolve).catch(reject);
  });

//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

export const uploadP = FileSystem.uploadAsync;
export const multipartUploadP = <T>(url: string, fileUri: string) =>
  new Promise<T>(async (resolve, reject) => {
    try {
      const exists = await existsP(fileUri);
      if (!exists) reject(new Error(`${getFilename(fileUri)} not found`));
      const result = await uploadP(url, fileUri, {
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        httpMethod: "POST",
        fieldName: "file",
        headers: {
          mode: "cors",
          cache: "no-cache",
          credentails: "same-origin",
        },
      });
      resolve(JSON.parse(result.body));
    } catch (e) {
      reject(e);
    }
  });
export const multipartUploadWithJWTP = <T>(
  url: string,
  fileUri: string,
  jwt: string
) =>
  new Promise<T>(async (resolve, reject) => {
    try {
      const exists = await existsP(fileUri);
      if (!exists) reject(new Error(`${getFilename(fileUri)} not found`));
      const result = await uploadP(url, fileUri, {
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        httpMethod: "POST",
        fieldName: "file",
        headers: {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          Authorization: `Bearer ${jwt}`,
        },
      });

      resolve(JSON.parse(result.body));
    } catch (e) {
      reject(e);
    }
  });

//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================
export const getTempDir = (): string => FileSystem.cacheDirectory ?? "";
export const getTempPath = (path: string) =>
  path[0] === "/" ? getTempDir() + path.substring(1) : getTempDir() + path;

export const getExpoDir = (): string => FileSystem.cacheDirectory ?? "";
export const getExpoPath = (path: string) =>
  path[0] === "/" ? getExpoDir() + path.substring(1) : getExpoDir() + path;

export const getExpoFile = async (path: string) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.getInfoAsync(expoPath);
  return file;
};

export const getExpoFileContent = async (path: string) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.readAsStringAsync(expoPath);
  return file;
};

export const getExpoFileContentJson = async (path: string) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.readAsStringAsync(expoPath);
  return JSON.parse(file);
};

export const getExpoFileContentJsonSafe = async (path: string) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.readAsStringAsync(expoPath);
  try {
    return JSON.parse(file);
  } catch (e) {
    return null;
  }
};

export const getExpoFileContentJsonSafeDefault = async (
  path: string,
  defaultValue: any
) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.readAsStringAsync(expoPath);
  try {
    return JSON.parse(file);
  } catch (e) {
    return defaultValue;
  }
};

export const getExpoFileContentJsonSafeDefaultEmpty = async (
  path: string,
  defaultValue: any
) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.readAsStringAsync(expoPath);
  try {
    return JSON.parse(file);
  } catch (e) {
    return defaultValue;
  }
};

export const getExpoFileContentJsonSafeDefaultEmptyObject = async (
  path: string
) => {
  const expoPath = getExpoPath(path);
  const file = await FileSystem.readAsStringAsync(expoPath);
  try {
    return JSON.parse(file);
  } catch (e) {
    return {};
  }
};
