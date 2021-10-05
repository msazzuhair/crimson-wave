# Tailwind CSS Project Template

This Tailwind CSS project template uses laravel-mix to compile all of the required files.

## Customizing The Generated Template

Before customizing the layout, you'll need to install all of the required dependencies using npm or yarn.

Example:

```
npm install
```

You can customize the Tailwind CSS configuration inside the `tailwind.config.jss`. You'll have to rebuild the css file inside `dist/css/app.css`.

## Building The CSS

### Just-in-Time (JIT) Mode

To run the watcher, run this command:

```
npm run watch
```

### One-Off Build

To build for development environment (without purging the classes and minifying the css result), use this command:
```
npm run dev
```

To build for production environment (with class purging and minifying), use this command:
```
npm run prod
```

# License

This Tailwind CSS project template repository is licensed under the [MIT License](LICENSE)
