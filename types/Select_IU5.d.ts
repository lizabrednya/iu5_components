import { SelectProps } from "@mui/material";
interface IProps extends SelectProps {
    choose_from: Array<MenuItem_IU5>;
}
interface MenuItem_IU5 {
    name: string;
    value: any;
}
export declare const Select_IU5: (props: IProps) => JSX.Element;
export {};
