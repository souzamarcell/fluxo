export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Fluxo
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Ainda não tem uma conta? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
