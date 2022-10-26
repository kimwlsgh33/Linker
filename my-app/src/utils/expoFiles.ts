import {
  documentDirectory,
  StorageAccessFramework,
  EncodingType,
  getInfoAsync,
  makeDirectoryAsync,
  writeAsStringAsync,
  readAsStringAsync,
  deleteAsync,
} from "expo-file-system";

const encoding = EncodingType.UTF8;
const initialPath = `${documentDirectory}files/`;

// 폴더가 존재하는지 확인, 없으면 생성
export const ensureDirExists = async () => {
  const dir = initialPath;
  const exists = await getInfoAsync(dir);
  if (!exists.exists) {
    await makeDirectoryAsync(dir);
  }
};

// 쓰기
export const saveFile = (filePath) => {
  const path = `${initialPath}${filePath}`;
  return ensureDirExists().then(() => {
    writeAsStringAsync(path, "Hello World", {
      encoding,
    })
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });
};

// 읽기
export const readFile = async (filePath: string = initialPath) =>
  ensureDirExists().then(() => {
    readAsStringAsync(filePath, {
      encoding,
    })
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });

// 삭제
export const deleteFile = async (filePath: string = initialPath) =>
  ensureDirExists().then(() => {
    deleteAsync(filePath)
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });

//================================================================================================
//================================================================================================
// For SAF, we need to use the SAF URI instead of the file URI
//================================================================================================
//================================================================================================

export const getSAFDirUri = async () => {
  const permissions =
    await StorageAccessFramework.requestDirectoryPermissionsAsync().catch((e) =>
      alert(e)
    );

  if (permissions && permissions.granted) {
    return permissions.directoryUri;
  }

  return false;
};

export const readSAFDir = async (dirUri) =>
  StorageAccessFramework.readDirectoryAsync(dirUri).catch((e) => {
    console.log(e);
    return [];
  });

export const readSAFFile = async (filePath) =>
  StorageAccessFramework.readAsStringAsync(filePath, { encoding }).catch((e) =>
    alert(e)
  );

export const writeSAFFile = async (filePath, content) =>
  StorageAccessFramework.writeAsStringAsync(filePath, content, {
    encoding,
  }).catch((e) => alert(e));

export const createSAFFile = async (dirUri, fileName, mimeType, content) =>
  StorageAccessFramework.createFileAsync(dirUri, fileName, mimeType).then(
    (filePath) => writeSAFFile(filePath, content)
  );

export const updateSAFFile = async (filePath, content) =>
  StorageAccessFramework.writeAsStringAsync(filePath, content, {
    encoding,
  }).catch((e) => alert(e));

export const deleteSAFFile = async (filePath) =>
  StorageAccessFramework.deleteAsync(filePath).catch((e) => alert(e));
