import { utils, withTheme } from '@rjsf/core';
import React from 'react';
import Box from 'react-bulma-components/lib/components/box';
import Columns from 'react-bulma-components/lib/components/columns';
import Level from 'react-bulma-components/lib/components/level';
import Button from 'react-bulma-components/lib/components/button';
import Icon from 'react-bulma-components/lib/components/icon';
import Card from 'react-bulma-components/lib/components/card';
import List from 'react-bulma-components/lib/components/list';
import Heading from 'react-bulma-components/lib/components/heading';
import Form$1 from 'react-bulma-components/lib/components/form';
import Notification from 'react-bulma-components/lib/components/notification';
import Element from 'react-bulma-components/lib/components/element';

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

var AddButton = function AddButton(props) {
  return React.createElement(Button, Object.assign({}, props, {
    className: "button-add"
  }), React.createElement(Icon, {
    icon: "fa-add"
  }), " Add Item");
};

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

  return React.createElement(Button, Object.assign({}, otherProps, {
    size: size || mappings[size]
  }), mappings[icon]);
};

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
  }, React.createElement(Columns.Column, null, React.createElement(Box, null, props.children)), props.hasToolbar && React.createElement(Columns.Column, null, (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
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
  }), props.canAdd && React.createElement(Level.Side, {
    align: "right"
  }, React.createElement(Level, {
    item: true
  }, React.createElement(Box, null, React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }))))));
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Card, {
    className: "errors-card"
  }, React.createElement(Card.Header, null, React.createElement(Card.Header.Title, null, "Errors")), React.createElement(Card.Content, null, React.createElement(List, null, errors.map(function (error, i) {
    return React.createElement(List.Item, {
      key: i
    }, React.createElement(Icon, {
      icon: "fa-error"
    }), error.stack);
  }))));
};

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;
  if (!description) return null;
  return React.createElement(Heading, {
    subtitle: true,
    size: 6
  }, description);
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(Box, null, React.createElement(Heading, {
    renderAs: "h5"
  }, title));
};

var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};

var Field = Form$1.Field,
    Help = Form$1.Help,
    Label = Form$1.Label;

function BulmaFieldErrorListTemplate(errors) {
  if (!errors) return null;
  return React.createElement(List, {
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

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var description = _ref.description,
      title = _ref.title,
      properties = _ref.properties,
      uiSchema = _ref.uiSchema;
  return React.createElement(Card, null, (uiSchema['ui:title'] || title) && React.createElement(Card.Header, null, title), description && React.createElement("p", null, description), React.createElement(Card.Content, null, properties.map(function (element, index) {
    return React.createElement("div", {
      key: index,
      className: "field-row"
    }, element.content);
  })));
};

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

var Checkbox$1 = Form$1.Checkbox,
    Field$1 = Form$1.Field,
    Label$2 = Form$1.Label;

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

var Label$3 = Form$1.Label,
    Input = Form$1.Input;

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

var Label$4 = Form$1.Label,
    Input$1 = Form$1.Input;

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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Label$5 = Form$1.Label,
    Input$2 = Form$1.Input;
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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Label$6 = Form$1.Label,
    Input$3 = Form$1.Input;

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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Input$4 = Form$1.Input;

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

var Field$2 = Form$1.Field,
    Label$7 = Form$1.Label,
    Radio = Form$1.Radio;

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

var Label$8 = Form$1.Label;
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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Label$9 = Form$1.Label,
    Select = Form$1.Select;
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
  }, label || schema.title, required ? React.createElement(Element, {
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
    return React.createElement(Element, {
      key: i,
      renderAs: "option",
      value: value,
      disabled: disabled
    }, label);
  })), rawErrors);
};

var Label$a = Form$1.Label,
    Textarea = Form$1.Textarea;

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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Label$b = Form$1.Label,
    Input$5 = Form$1.Input;

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

  // PropTypes.checkPropTypes(Input.propTypes, {type: type || (schema.type as string)}, 'prop', 'Input', function() {
  //   type = 'text';
  // });
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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Control = Form$1.Control,
    Label$c = Form$1.Label,
    Input$6 = Form$1.Input;

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
  }, label || schema.title, required ? React.createElement(Element, {
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

var Label$d = Form$1.Label,
    Input$7 = Form$1.Input;

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
  }, label || schema.title, required ? React.createElement(Element, {
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

var getDefaultRegistry$1 = utils.getDefaultRegistry;

var _getDefaultRegistry = /*#__PURE__*/getDefaultRegistry$1(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var DefaultChildren = function DefaultChildren() {
  return React.createElement(Box, null, React.createElement(Button, {
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

var Form = /*#__PURE__*/withTheme(Theme);

export default Form;
export { FieldTemplate, Fields, Form, ObjectFieldTemplate, Theme, Widgets };
//# sourceMappingURL=bulma-css.esm.js.map
