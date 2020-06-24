/// <reference types="react" />
import PropTypes from "prop-types";
declare function SelectWidget(props: any): JSX.Element;
declare namespace SelectWidget {
    var defaultProps: {
        autofocus: boolean;
    };
    var propTypes: {
        schema: PropTypes.Validator<object>;
        id: PropTypes.Validator<string>;
        options: PropTypes.Validator<PropTypes.InferProps<{
            enumOptions: PropTypes.Requireable<any[]>;
        }>>;
        value: PropTypes.Requireable<any>;
        required: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        readonly: PropTypes.Requireable<boolean>;
        multiple: PropTypes.Requireable<boolean>;
        autofocus: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default SelectWidget;
