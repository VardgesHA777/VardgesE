const types = {
  USER: 'user',
};

function Storage(this: any, name: string) {
  this.set = function (value: number | string | object) {
    return localStorage.setItem(name, JSON.stringify(value));
  };

  this.remove = function () {
    return localStorage.removeItem(name);
  };

  this.get = function () {
    return JSON.parse(localStorage.getItem(name) as string);
  };
}

export const ClearStorage = () => {
  return localStorage.clear();
};

// @ts-ignore
export const User = new Storage(types.USER);
