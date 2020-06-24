/// <reference types="react" />
import PropTypes from "prop-types";
declare function CheckboxWidget(props: any): JSX.Element;
declare namespace CheckboxWidget {
    var defaultProps: {
        autofocus: boolean;
    };
    var propTypes: {
        schema: PropTypes.Validator<object>;
        id: PropTypes.Validator<string>;
        value: PropTypes.Requireable<boolean>;
        required: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        readonly: PropTypes.Requireable<boolean>;
        autofocus: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default CheckboxWidget;
