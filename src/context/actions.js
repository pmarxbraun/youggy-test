export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  }

  try {
    dispatch({ type: "REQUEST_LOGIN" })
    let response = await fetch(
      `${process.env.GATSBY_YOUGGY_API_URL}/v1/auth/association/sign-in`,
      requestOptions
    )
    let data = await response.json()

    if (data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data })
      localStorage.setItem("currentUser", JSON.stringify(data))
      return data
    }

    dispatch({ type: "LOGIN_ERROR", error: data.statusCode })
    return data
  } catch (error) {
    dispatch({
      type: "LOGIN_ERROR",
      error: "Something went wrong with the request",
    })
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" })
  localStorage.removeItem("currentUser")
  localStorage.removeItem("token")
}
