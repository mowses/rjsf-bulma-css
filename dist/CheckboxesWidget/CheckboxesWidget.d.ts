/// <reference types="react" />
import PropTypes from "prop-types";
declare function CheckboxesWidget(props: any): JSX.Element;
declare namespace CheckboxesWidget {
    var defaultProps: {
        autofocus: boolean;
        options: {
            inline: boolean;
        };
    };
    var propTypes: {
        schema: PropTypes.Validator<object>;
        id: PropTypes.Validator<string>;
        options: PropTypes.Validator<PropTypes.InferProps<{
            enumOptions: PropTypes.Requireable<any[]>;
            inline: PropTypes.Requireable<boolean>;
        }>>;
        value: PropTypes.Requireable<any>;
        required: PropTypes.Requireable<boolean>;
        readonly: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        multiple: PropTypes.Requireable<boolean>;
        autofocus: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default CheckboxesWidget;
