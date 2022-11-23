import * as C from './styles'
type Props = {
    text: string;
    toggleTheme: () => void
}
export const ThemeToggler = ({text, toggleTheme}: Props) => {
    
    return (
        <C.Container>
            <C.Button onClick={toggleTheme}>
                {text}
            </C.Button>
        </C.Container>
    );
}