import { ThemeProvider } from "@/app/theme-provider"
import { Toaster } from "@/components/ui/sonner"

export default function Provider({ children }: { children: React.ReactNode }){
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <Toaster />
            </ThemeProvider>
        </>
    )
}