import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Heading, Paragraph } from "grommet";
import DEF_VALUE from "./defaults";
var Feature1 = function (props) {
    var _a = props.value, value = _a === void 0 ? DEF_VALUE : _a;
    var _b = value.title, title = _b === void 0 ? DEF_VALUE.title : _b, _c = value.subtitle, subtitle = _c === void 0 ? DEF_VALUE.subtitle : _c, _d = value.description, description = _d === void 0 ? DEF_VALUE.description : _d;
    return (_jsx(Box, __assign({ align: "center", fill: "horizontal" }, { children: _jsx(Box, __assign({ width: "xlarge" }, { children: _jsxs(Box, __assign({ direction: "row", gap: "xlarge", pad: { vertical: "medium" } }, { children: [_jsx(Box, {}), _jsxs(Box, __assign({ direction: "column", justify: "center", fill: "horizontal" }, { children: [_jsx(Heading, __assign({ color: "dark-1", level: 2, size: "medium", margin: { top: "none", bottom: "medium" } }, { children: title })), _jsx(Paragraph, __assign({ color: "dark-2", margin: { top: "xsmall", bottom: "xsmall" }, fill: true, size: "medium", style: {
                                    lineHeight: "30px",
                                } }, { children: description }))] }))] })) })) })));
};
export default Feature1;
