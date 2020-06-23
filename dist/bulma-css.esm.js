import { utils, withTheme } from '@rjsf/core';
import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Button = /*#__PURE__*/require('react-bulma-components/lib/components/button');

var Icon = /*#__PURE__*/require('react-bulma-components/lib/components/icon');

var AddButton = function AddButton(props) {
  return React.createElement(Button, Object.assign({}, props, {
    className: "button-add"
  }), React.createElement(Icon, {
    icon: "fa-add"
  }), " Add Item");
};

var Button$1 = /*#__PURE__*/require('react-bulma-components/lib/components/button');

var mappings = {
  'remove': 'fa-remove',
  'plus': 'fa-add',
  'arrow-up': 'fa-arrow-up',
  'arrow-down': 'fa-arrow-down',
  'size': 'small'
};

var IconButton = function IconButton(props) {
  var icon = props.icon,
      size = props.size,
      otherProps = _objectWithoutPropertiesLoose(props, ["icon", "size"]);

  return React.createElement(Button$1, Object.assign({}, otherProps, {
    size: size || mappings[size]
  }), mappings[icon]);
};

var Box = /*#__PURE__*/require('react-bulma-components/lib/components/box');

var Columns = /*#__PURE__*/require('react-bulma-components/lib/components/columns');

var Level = /*#__PURE__*/require('react-bulma-components/lib/components/level');

var LevelSide = Level.LevelSide;
var Column = Columns.Column;
var isMultiSelect = utils.isMultiSelect,
    getDefaultRegistry = utils.getDefaultRegistry;

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry; // TODO: update types so we don't have to cast registry as any

  if (isMultiSelect(schema, registry.rootSchema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  } else {
    return React.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
  }
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  var id = idSchema.$id + "__title";
  return React.createElement(TitleField, {
    id: id,
    title: title,
    required: required
  });
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    return null;
  }

  var id = idSchema.$id + "__description";
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
}; // Used in the two templates


var DefaultArrayItem = function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold'
  };
  return React.createElement(Columns, {
    key: props.key,
    centered: true
  }, React.createElement(Column, null, React.createElement(Box, null, props.children)), props.hasToolbar && React.createElement(Column, null, (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-up",
    className: "array-item-move-up",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-down",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && React.createElement(IconButton, {
    icon: "remove",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  })));
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(props) {
  return React.createElement("fieldset", {
    className: props.className
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React.createElement("div", {
    className: "field-description",
    key: "field-description-" + props.idSchema.$id
  }, props.uiSchema['ui:description'] || props.schema.description), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-" + props.idSchema.$id
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(props) {
  return React.createElement(Box, null, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + props.idSchema.$id,
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema['ui:description'] || props.schema.description
  }), React.createElement(Level, {
    key: "array-item-list-" + props.idSchema.$id
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  }), props.canAdd && React.createElement(LevelSide, {
    align: "right"
  }, React.createElement(Level, {
    item: true
  }, React.createElement(Box, null, React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }))))));
};

var Card = /*#__PURE__*/require('react-bulma-components/lib/components/card');

var Icon$1 = /*#__PURE__*/require('react-bulma-components/lib/components/icon');

var List = /*#__PURE__*/require('react-bulma-components/lib/components/list');

var CardContent = Card.CardContent,
    CardHeader = Card.CardHeader;
var CardHeaderTitle = CardHeader.CardHeaderTitle;
var ListItem = List.ListItem;

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Card, {
    className: "errors-card"
  }, React.createElement(CardHeader, null, React.createElement(CardHeaderTitle, null, "Errors")), React.createElement(CardContent, null, React.createElement(List, null, errors.map(function (error, i) {
    return React.createElement(ListItem, {
      key: i
    }, React.createElement(Icon$1, {
      icon: "fa-error"
    }), error.stack);
  }))));
};

var Heading = /*#__PURE__*/require('react-bulma-components/lib/components/heading');

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;
  if (!description) return null;
  return React.createElement(Heading, {
    subtitle: true,
    size: 6
  }, description);
};

var Box$1 = /*#__PURE__*/require('react-bulma-components/lib/components/box');

var Heading$1 = /*#__PURE__*/require('react-bulma-components/lib/components/heading');

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(Box$1, null, React.createElement(Heading$1, {
    renderAs: "h5"
  }, title));
};

var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};

var Form = /*#__PURE__*/require('react-bulma-components');

var Notification = /*#__PURE__*/require('react-bulma-components/lib/components/notification');

var List$1 = /*#__PURE__*/require('react-bulma-components/lib/components/list');

var Field = Form.Field,
    Help = Form.Help,
    Label = Form.Label;

function BulmaFieldErrorListTemplate(errors) {
  if (!errors) return null;
  return React.createElement(List$1, {
    className: "errors-list"
  }, errors.map(function (error, index) {
    return React.createElement(Notification, {
      key: index
    }, error);
  }));
}

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
      classNames = _ref.classNames,
      children = _ref.children,
      description = _ref.description,
      displayLabel = _ref.displayLabel,
      help = _ref.help,
      label = _ref.label,
      required = _ref.required,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;
  return React.createElement(Field, {
    className: classNames
  }, displayLabel && label ? React.createElement(Label, {
    htmlFor: id
  }, label, required ? React.createElement("span", {
    className: "required-mark"
  }, "*") : null) : null, description, children, BulmaFieldErrorListTemplate(rawErrors), React.createElement(Help, null, help));
};

var Card$1 = /*#__PURE__*/require('react-bulma-components/lib/components/card');

var Content = /*#__PURE__*/require('react-bulma-components/lib/components/content');

var Header = Card$1.Header;

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var description = _ref.description,
      title = _ref.title,
      properties = _ref.properties,
      uiSchema = _ref.uiSchema;
  return React.createElement(Card$1, null, (uiSchema['ui:title'] || title) && React.createElement(Header, null, title), description && React.createElement("p", null, description), React.createElement(Content, null, properties.map(function (element, index) {
    return React.createElement("div", {
      key: index,
      className: "field-row"
    }, element.content);
  })));
};

var Form$1 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Checkbox = Form$1.Checkbox,
    Label$1 = Form$1.Label;

var CheckboxWidget = function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var _onChange = function _onChange(_ref, checked) {
    _objectDestructuringEmpty(_ref);

    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Label$1, {
    className: "checkbox"
  }, React.createElement(Checkbox, {
    id: id,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }), label);
};

var Form$2 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Checkbox$1 = Form$2.Checkbox,
    Field$1 = Form$2.Field,
    Label$2 = Form$2.Label;

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var schema = _ref.schema,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      required = _ref.required,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;

  var _onChange = function _onChange(option) {
    return function (_ref2) {
      var checked = _ref2.target.checked;
      var all = enumOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur(_ref4) {
    var value = _ref4.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref5) {
    var value = _ref5.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$2, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement("span", {
    className: "required-mark"
  }, "*") : null), React.createElement(Field$1, {
    kind: "group"
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    var checkbox = React.createElement(Checkbox$1, {
      id: id + "_" + index,
      checked: checked,
      disabled: disabled || itemDisabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus
    });
    return inline ? React.createElement(Label$2, {
      htmlFor: id + "_" + index,
      key: index
    }, option.label, checkbox) : React.createElement(Label$2, {
      htmlFor: id + "_" + index,
      key: index
    }, option.label, checkbox);
  })));
};

var Element = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$3 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$3 = Form$3.Label,
    Input = Form$3.Input;

var ColorWidget = function ColorWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$3, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input, {
    type: "color",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Element$1 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$4 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$4 = Form$4.Label,
    Input$1 = Form$4.Input;

var DateWidget = function DateWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$4, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$1, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input$1, {
    type: "date",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Element$2 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$5 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$5 = Form$5.Label,
    Input$2 = Form$5.Input;
var localToUTC = utils.localToUTC,
    utcToLocal = utils.utcToLocal;

var DateTimeWidget = function DateTimeWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(localToUTC(value));
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$5, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$2, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input$2, {
    type: "datetime-local",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: utcToLocal(value),
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Element$3 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$6 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$6 = Form$6.Label,
    Input$3 = Form$6.Input;

var EmailWidget = function EmailWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$6, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$3, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input$3, {
    type: "email",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Form$7 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Input$4 = Form$7.Input;

var PasswordWidget = function PasswordWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      value = _ref.value,
      label = _ref.label,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      options = _ref.options,
      autofocus = _ref.autofocus,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Input$4, {
    type: "password",
    id: id,
    label: label || schema.title,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    value: value ? value : "",
    error: rawErrors.length > 0,
    onFocus: _onFocus,
    onBlur: _onBlur,
    onChange: _onChange
  });
};

var Form$8 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Field$2 = Form$8.Field,
    Label$7 = Form$8.Label,
    Radio = Form$8.Radio;

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      label = _ref.label,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(_ref2, value) {
    _objectDestructuringEmpty(_ref2);

    return onChange(schema.type == "boolean" ? value !== "false" : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var row = options ? options.inline : false;
  return React.createElement(React.Fragment, null, React.createElement(Label$7, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement("span", {
    className: "required-mark"
  }, "*") : null), React.createElement(Field$2, {
    kind: "group",
    horizontal: row
  }, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    var radio = React.createElement(Label$7, {
      htmlFor: id + "_" + i
    }, React.createElement(Radio, {
      key: i,
      value: "" + option.value,
      disabled: disabled || itemDisabled || readonly,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus
    }), option.label);
    return radio;
  })));
};

var Element$4 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$9 = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$8 = Form$9.Label;
var rangeSpec = utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema,
      onChange = _ref.onChange,
      required = _ref.required,
      label = _ref.label,
      id = _ref.id;

  var sliderProps = _extends({
    value: value,
    label: label,
    id: id
  }, rangeSpec(schema));

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$8, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$4, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement("input", Object.assign({
    type: "range",
    className: "slider is-fullwidth",
    disabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, sliderProps)));
};

var Element$5 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$a = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$9 = Form$a.Label,
    Select = Form$a.Select;
var asNumber = utils.asNumber,
    guessType = utils.guessType;
var nums = /*#__PURE__*/new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema["enum"]) {
    if (schema["enum"].every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    } else if (schema["enum"].every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
};

var SelectWidget = function SelectWidget(_ref) {
  var schema = _ref.schema,
      id = _ref.id,
      options = _ref.options,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      value = _ref.value,
      multiple = _ref.multiple,
      autofocus = _ref.autofocus,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(processValue(schema, value));
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, processValue(schema, value));
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, processValue(schema, value));
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$9, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$5, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Select, {
    id: id,
    name: name,
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus,
    multiple: typeof multiple === "undefined" ? false : multiple
  }, enumOptions.map(function (_ref5, i) {
    var value = _ref5.value,
        label = _ref5.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return React.createElement(Element$5, {
      key: i,
      renderAs: "option",
      value: value,
      disabled: disabled
    }, label);
  })), rawErrors);
};

var Element$6 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$b = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$a = Form$b.Label,
    Textarea = Form$b.Textarea;

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      label = _ref.label,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$a, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$6, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Textarea, {
    id: id,
    required: required,
    placeholder: placeholder,
    disabled: disabled || readonly,
    value: value,
    autoFocus: autofocus,
    rows: options.rows || 5,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Element$7 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$c = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$b = Form$c.Label,
    Input$5 = Form$c.Input;

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      type = _ref.type,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$b, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$7, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input$5, {
    type: type || schema.type,
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Element$8 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$d = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Control = Form$d.Control,
    Label$c = Form$d.Label,
    Input$6 = Form$d.Input;

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Control, {
    fullwidth: true
  }, React.createElement(Label$c, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$8, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input$6, {
    type: "number",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value ? value : '',
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Element$9 = /*#__PURE__*/require('react-bulma-components/lib/components/element');

var Form$e = /*#__PURE__*/require('react-bulma-components/lib/components/form');

var Label$d = Form$e.Label,
    Input$7 = Form$e.Input;

var URLWidget = function URLWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Label$d, {
    htmlFor: id
  }, label || schema.title, required ? React.createElement(Element$9, {
    renderAs: "span",
    className: "required-mark"
  }, "*") : null), React.createElement(Input$7, {
    type: "url",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  ColorWidget: ColorWidget,
  DateWidget: DateWidget,
  DateTimeWidget: DateTimeWidget,
  EmailWidget: EmailWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  URLWidget: URLWidget
};

var Box$2 = /*#__PURE__*/require('react-bulma-components/lib/components/box');

var Button$2 = /*#__PURE__*/require('react-bulma-components/lib/components/button');

var getDefaultRegistry$1 = utils.getDefaultRegistry;

var _getDefaultRegistry = /*#__PURE__*/getDefaultRegistry$1(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var DefaultChildren = function DefaultChildren() {
  return React.createElement(Box$2, null, React.createElement(Button$2, {
    type: "submit"
  }, "Submit"));
};

var Theme = {
  children: /*#__PURE__*/React.createElement(DefaultChildren, null),
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields: /*#__PURE__*/_extends({}, fields, Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets: /*#__PURE__*/_extends({}, widgets, Widgets),
  ErrorList: ErrorList
};

var BulmaForm = /*#__PURE__*/withTheme(Theme);

export default BulmaForm;
export { BulmaForm, FieldTemplate, Fields, ObjectFieldTemplate, Theme, Widgets };
//# sourceMappingURL=bulma-css.esm.js.map
