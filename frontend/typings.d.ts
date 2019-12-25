// Contains typings to help ts resolve different file types
// Prevents the error: TS2307: Cannot find module 'path/to/module.ext'

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}