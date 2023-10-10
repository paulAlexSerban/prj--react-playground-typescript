import React from 'react';
import { Spacing } from '@prj--playground-react/foundation';
export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children?: React.ReactNode;
}
declare const Margin: ({ space, children, left, right, top, bottom }: MarginProps) => React.JSX.Element;
export default Margin;
