interface StorageData {
  accessToken: string;
}

const initialStorageData: StorageData = {
  accessToken: "",
};

class Storage {
  private storageData: StorageData = initialStorageData;
  private STORE_PREFIX: "__matView__";

  constructor() {}

  set(key: keyof StorageData, value: string) {
    this.storageData[key] = value;

    localStorage.setItem(this.STORE_PREFIX, JSON.stringify(this.storageData));
  }

  get(key: keyof StorageData) {
    const data = localStorage.getItem(this.STORE_PREFIX);
    const storeData: StorageData = JSON.parse(data);

    return storeData[key];
  }
}

export default new Storage();
