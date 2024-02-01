export default function ContactoLayout({ children }) {
    return (
        <>
        {/* // hacen referencia a --> contacto/page.js */}
            {children}
            <footer className="bg-gray-200 w-full">
                <div className="container m-auto py-4 flex items-center gap-4">
                    <h4 className="text-2xl font-bold">Siguenos en nuestras redes</h4>
                    <a>Instragram</a>
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>LinkedIn</a>
                </div>
            </footer>
        </>
    )
}