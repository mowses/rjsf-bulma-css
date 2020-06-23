/// <reference types="react" />
/// <reference types="@rjsf/core" />
declare const _default: {
    CheckboxWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
    CheckboxesWidget: ({ schema, label, id, disabled, options, value, autofocus, readonly, required, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    ColorWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema }: import("@rjsf/core").WidgetProps) => JSX.Element;
    DateWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema }: import("@rjsf/core").WidgetProps) => JSX.Element;
    DateTimeWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, schema }: import("@rjsf/core").WidgetProps) => JSX.Element;
    EmailWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema }: import("@rjsf/core").WidgetProps) => JSX.Element;
    PasswordWidget: ({ id, required, readonly, disabled, value, label, onFocus, onBlur, onChange, options, autofocus, schema, rawErrors, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    RadioWidget: ({ id, schema, options, required, disabled, readonly, label, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    RangeWidget: ({ value, readonly, disabled, onBlur, onFocus, options, schema, onChange, required, label, id, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    SelectWidget: ({ schema, id, options, label, required, disabled, readonly, value, multiple, autofocus, onChange, onBlur, onFocus, rawErrors, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    TextareaWidget: ({ id, placeholder, value, required, disabled, autofocus, label, readonly, onBlur, onFocus, onChange, options, schema, }: import("@rjsf/core").WidgetProps & {
        options: any;
    }) => JSX.Element;
    TextWidget: ({ id, required, readonly, disabled, type, label, value, onChange, onBlur, onFocus, autofocus, options, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    UpDownWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    URLWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
};
export default _default;
