import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IToolbarWidgetRegistry, ReactWidget } from '@jupyterlab/apputils';
import { Cell } from '@jupyterlab/cells';
import React from 'react';

/**
 * Initialization data for the demo_cell_toolbar_item extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'demo_cell_toolbar_item:plugin',
  autoStart: true,
  requires: [IToolbarWidgetRegistry],
  activate: (app: JupyterFrontEnd, toolbarRegistry: IToolbarWidgetRegistry) => {
    console.log('JupyterLab extension demo_cell_toolbar_item is activated!');

    toolbarRegistry.registerFactory<Cell>(
      'Cell',
      'demo-checkbox',
      (cell: Cell) => new Checkbox()
    );
  }
};

export default plugin;

class Checkbox extends ReactWidget {
  render(): JSX.Element {
    return (
      <label>
        <input type={'checkbox'}></input>Check me!
      </label>
    );
  }
}