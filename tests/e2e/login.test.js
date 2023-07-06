import LoginPage from "../../pages/login.page.js"
const loginPage = new LoginPage()

let result = loginPage.login("guilhermeluzlisboa@gmail.com", "1234657")

test('Realizar login com sucesso', () => {
  expect(result).toBe(true);
});