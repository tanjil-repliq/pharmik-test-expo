export const sortListByAsc = (list) => list.sort((a, b) => a.value - b.value);

export const sortListByName = (list) =>
  list.sort((a, b) => a.value.localeCompare(b.value));

export const removeFalsy = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (Array.isArray(obj[prop]) && obj[prop].length > 0) {
      newObj[prop] = obj[prop];
    }
    if (!Array.isArray(obj[prop]) && obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

export const titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

export function deferred() {
  let _deferred = {};
  _deferred.promise = new Promise(function (resolve, reject) {
    _deferred.resolve = resolve;
    _deferred.reject = reject;
  });
  return _deferred;
}

export function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function formatAmountWithThousandSeparator(amount, separator = " ") {
  return parseInt(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function pick(obj, props) {
  // Create new object
  var picked = {};

  // Loop through props and push to new object
  for (let prop of props) {
    picked[prop] = obj[prop];
  }

  // Return new object
  return picked;
}

export function pickDifference(initialValues, submittedValues) {
  // Pull out all keys from the object
  const keys = Object.keys(initialValues);

  // Create a new object
  const picked = {};

  for (let key of keys) {
    // Loop through the object and pick changed values
    if (initialValues[key] !== submittedValues[key]) {
      picked[key] = submittedValues[key];
    }
  }

  // Return new object
  return picked;
}

export function getTruthyKeys(obj) {
  // pass an object and return keys that are not empty string, null or undefined
  return Object.keys(obj).filter((key) => obj[key]);
}

// Sanitize query params and return searched params
export function sanitizeParams(params) {
  // Initial params object
  const sanitizedObj = {};

  for (const key in params) {
    if (params[key]) {
      sanitizedObj[key] = params[key];
    }
  }

  return sanitizedObj;
}

// Format date and time using the Browser Intl API
export function formatDateAndTime(data, isTimeRequired = false) {
  // Convert incoming date to a string
  const date = new Date(`${data}`);

  // Create options depending on requirement
  const createOptions = () => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    if (isTimeRequired) {
      options.hour = "numeric";
      options.minute = "numeric";
    }

    return options;
  };

  // Created an instance
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", createOptions());

  // Return the formatted date
  return dateTimeFormat.format(date);
}

// Format currency using the Browser Intl API
export function formatCurrency(data) {
  // Created an instance
  const formatCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BDT",
  });

  // Return the formatted currency
  return formatCurrency.format(data).slice(4);
}

// Check current roles permission
export function checkAccess(currentRole = "", permittedRoles = []) {
  const hasAccess = permittedRoles
    .map((role) => role.toUpperCase()) // Convert the role to uppercase
    .includes(currentRole.toUpperCase()); // Check access depending on role

  // Returned a boolean value
  return hasAccess;
}
