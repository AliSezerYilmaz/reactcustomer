const sendJwtToClient = (customer, res) => {
  const token = customer.generateJwtFromCustomer();
  const { JWT_COOKIE, NOD_ENV } = process.env;
  return res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000),
      secure: NOD_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      access_token: token,
      data: {
        name: customer.name + " " + customer.surname,
        phone: customer.phone
      },
    });
};
module.exports = sendJwtToClient;
