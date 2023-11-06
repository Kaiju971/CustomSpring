export const validateHasParameters = (...args) => {
  return (req, res, next) => {
    const body = req.body.data;

    let valid = true;

    for (const arg of args) {
      if (body[arg] === undefined) {
        res.status(403).json({ error: arg + " non spécifié" });
        valid = false;
        break;
      }
    }

    if (valid) {
      next();
    }
  };
};

export const validatePasswordLength = (req, res, next) => {
  const { password } = req.body.data;

  if (!!password && password.length > 7) {
    next();
  } else {
    res.status(403).json({ error: "Password invalide" });
  }
};

export const validateEmailFormat = (req, res, next) => {
  const { email } = req.body.data;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!!email && re.test(String(email).toLowerCase())) {
    next();
  } else {
    res.status(403).json({ error: "email invalide" });
  }
};
