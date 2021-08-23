/* eslint-disable */

declare module com {
  export module google {
    export module maps {
      export module android {
        export class BuildConfig {
          public static class: java.lang.Class<com.google.maps.android.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static TRAVIS: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export class MathUtil {
          public static class: java.lang.Class<com.google.maps.android.MathUtil>;
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export class PolyUtil {
          public static class: java.lang.Class<com.google.maps.android.PolyUtil>;
          public static DEFAULT_TOLERANCE: number;
          public static distanceToLine(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: com.google.android.gms.maps.model.LatLng,
            param2: com.google.android.gms.maps.model.LatLng,
          ): number;
          public static isLocationOnEdge(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
          ): boolean;
          public static isLocationOnEdge(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
            param3: number,
          ): boolean;
          public static locationIndexOnPath(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
            param3: number,
          ): number;
          public static isClosedPolygon(
            param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
          ): boolean;
          public static locationIndexOnPath(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
          ): number;
          public static isLocationOnPath(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
          ): boolean;
          public static containsLocation(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
          ): boolean;
          public static isLocationOnPath(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
            param3: number,
          ): boolean;
          public static locationIndexOnEdgeOrPath(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param2: boolean,
            param3: boolean,
            param4: number,
          ): number;
          public static containsLocation(
            param0: number,
            param1: number,
            param2: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param3: boolean,
          ): boolean;
          public static decode(
            param0: string,
          ): java.util.List<com.google.android.gms.maps.model.LatLng>;
          public static simplify(
            param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
            param1: number,
          ): java.util.List<com.google.android.gms.maps.model.LatLng>;
          public static encode(
            param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
          ): string;
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export class SphericalUtil {
          public static class: java.lang.Class<com.google.maps.android.SphericalUtil>;
          public static computeArea(
            param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
          ): number;
          public static computeSignedArea(
            param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
          ): number;
          public static computeOffset(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: number,
            param2: number,
          ): com.google.android.gms.maps.model.LatLng;
          public static computeLength(
            param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
          ): number;
          public static interpolate(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: com.google.android.gms.maps.model.LatLng,
            param2: number,
          ): com.google.android.gms.maps.model.LatLng;
          public static computeHeading(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: com.google.android.gms.maps.model.LatLng,
          ): number;
          public static computeDistanceBetween(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: com.google.android.gms.maps.model.LatLng,
          ): number;
          public static computeOffsetOrigin(
            param0: com.google.android.gms.maps.model.LatLng,
            param1: number,
            param2: number,
          ): com.google.android.gms.maps.model.LatLng;
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export class Cluster<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.maps.android.clustering.Cluster<any>>;
            /**
             * Constructs a new instance of the com.google.maps.android.clustering.Cluster<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getPosition(): com.google.android.gms.maps.model.LatLng;
              getItems(): java.util.Collection<T>;
              getSize(): number;
            });
            public constructor();
            public getSize(): number;
            public getPosition(): com.google.android.gms.maps.model.LatLng;
            public getItems(): java.util.Collection<T>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export class ClusterItem {
            public static class: java.lang.Class<com.google.maps.android.clustering.ClusterItem>;
            /**
             * Constructs a new instance of the com.google.maps.android.clustering.ClusterItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getPosition(): com.google.android.gms.maps.model.LatLng;
              getTitle(): string;
              getSnippet(): string;
            });
            public constructor();
            public getPosition(): com.google.android.gms.maps.model.LatLng;
            public getSnippet(): string;
            public getTitle(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export class ClusterManager<T> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.maps.android.clustering.ClusterManager<any>
            >;
            public setOnClusterItemInfoWindowClickListener(
              param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>,
            ): void;
            public updateItem(param0: T): boolean;
            public removeItems(param0: java.util.Collection<T>): boolean;
            public setAlgorithm(
              param0: com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<T>,
            ): void;
            public setAnimation(param0: boolean): void;
            public getRenderer(): com.google.maps.android.clustering.view.ClusterRenderer<T>;
            public getAlgorithm(): com.google.maps.android.clustering.algo.Algorithm<T>;
            public setOnClusterInfoWindowLongClickListener(
              param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>,
            ): void;
            public setAlgorithm(param0: com.google.maps.android.clustering.algo.Algorithm<T>): void;
            public onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
            public getClusterMarkerCollection(): com.google.maps.android.collections.MarkerManager.Collection;
            public setOnClusterItemClickListener(
              param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>,
            ): void;
            public onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.maps.GoogleMap,
            );
            public clearItems(): void;
            public setOnClusterInfoWindowClickListener(
              param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>,
            ): void;
            public setOnClusterItemInfoWindowLongClickListener(
              param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>,
            ): void;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.maps.GoogleMap,
              param2: com.google.maps.android.collections.MarkerManager,
            );
            public setOnClusterClickListener(
              param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>,
            ): void;
            public addItems(param0: java.util.Collection<T>): boolean;
            public addItem(param0: T): boolean;
            public onCameraIdle(): void;
            public cluster(): void;
            public setRenderer(
              param0: com.google.maps.android.clustering.view.ClusterRenderer<T>,
            ): void;
            public removeItem(param0: T): boolean;
            public getMarkerCollection(): com.google.maps.android.collections.MarkerManager.Collection;
            public getMarkerManager(): com.google.maps.android.collections.MarkerManager;
          }
          export module ClusterManager {
            export class ClusterTask extends globalAndroid.os.AsyncTask<
              java.lang.Float,
              java.lang.Void,
              java.util.Set<any>
            > {
              public static class: java.lang.Class<com.google.maps.android.clustering.ClusterManager.ClusterTask>;
              public doInBackground(
                param0: androidNative.Array<java.lang.Float>,
              ): java.util.Set<any>;
              public onPostExecute(param0: java.util.Set<any>): void;
            }
            export class OnClusterClickListener<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onClusterClick(param0: com.google.maps.android.clustering.Cluster<T>): boolean;
              });
              public constructor();
              public onClusterClick(param0: com.google.maps.android.clustering.Cluster<T>): boolean;
            }
            export class OnClusterInfoWindowClickListener<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onClusterInfoWindowClick(
                  param0: com.google.maps.android.clustering.Cluster<T>,
                ): void;
              });
              public constructor();
              public onClusterInfoWindowClick(
                param0: com.google.maps.android.clustering.Cluster<T>,
              ): void;
            }
            export class OnClusterInfoWindowLongClickListener<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onClusterInfoWindowLongClick(
                  param0: com.google.maps.android.clustering.Cluster<T>,
                ): void;
              });
              public constructor();
              public onClusterInfoWindowLongClick(
                param0: com.google.maps.android.clustering.Cluster<T>,
              ): void;
            }
            export class OnClusterItemClickListener<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onClusterItemClick(param0: T): boolean });
              public constructor();
              public onClusterItemClick(param0: T): boolean;
            }
            export class OnClusterItemInfoWindowClickListener<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterItemInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onClusterItemInfoWindowClick(param0: T): void });
              public constructor();
              public onClusterItemInfoWindowClick(param0: T): void;
            }
            export class OnClusterItemInfoWindowLongClickListener<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.ClusterManager$OnClusterItemInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onClusterItemInfoWindowLongClick(param0: T): void;
              });
              public constructor();
              public onClusterItemInfoWindowLongClick(param0: T): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export abstract class AbstractAlgorithm<T> extends com.google.maps.android.clustering
              .algo.Algorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.AbstractAlgorithm<any>
              >;
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public getClusters(param0: number): java.util.Set<any>;
              public unlock(): void;
              public addItem(param0: any): boolean;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class Algorithm<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.Algorithm<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.algo.Algorithm<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                addItem(param0: T): boolean;
                addItems(param0: java.util.Collection<T>): boolean;
                clearItems(): void;
                removeItem(param0: T): boolean;
                updateItem(param0: T): boolean;
                removeItems(param0: java.util.Collection<T>): boolean;
                getClusters(param0: number): java.util.Set<any>;
                getItems(): java.util.Collection<T>;
                setMaxDistanceBetweenClusteredItems(param0: number): void;
                getMaxDistanceBetweenClusteredItems(): number;
                lock(): void;
                unlock(): void;
              });
              public constructor();
              public addItem(param0: T): boolean;
              public updateItem(param0: T): boolean;
              public addItems(param0: java.util.Collection<T>): boolean;
              public clearItems(): void;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public lock(): void;
              public getClusters(param0: number): java.util.Set<any>;
              public removeItem(param0: T): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public unlock(): void;
              public removeItems(param0: java.util.Collection<T>): boolean;
              public getItems(): java.util.Collection<T>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class GridBasedAlgorithm<T> extends com.google.maps.android.clustering.algo
              .AbstractAlgorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.GridBasedAlgorithm<any>
              >;
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public getClusters(param0: number): java.util.Set<any>;
              public addItem(param0: any): boolean;
              public unlock(): void;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class NonHierarchicalDistanceBasedAlgorithm<T> extends com.google.maps.android
              .clustering.algo.AbstractAlgorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm<any>
              >;
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public getClusteringItems(
                param0: com.google.maps.android.quadtree.PointQuadTree<
                  com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>
                >,
                param1: number,
              ): java.util.Collection<
                com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>
              >;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public getClusters(param0: number): java.util.Set<any>;
              public addItem(param0: any): boolean;
              public unlock(): void;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
            export module NonHierarchicalDistanceBasedAlgorithm {
              export class QuadItem<T> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>
                >;
                public getItems(): java.util.Set<T>;
                public equals(param0: any): boolean;
                public getPoint(): com.google.maps.android.geometry.Point;
                public getItems(): java.util.Collection<T>;
                public getSize(): number;
                public hashCode(): number;
                public getPosition(): com.google.android.gms.maps.model.LatLng;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class NonHierarchicalViewBasedAlgorithm<T>
              extends com.google.maps.android.clustering.algo
                .NonHierarchicalDistanceBasedAlgorithm<any>
              implements com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.NonHierarchicalViewBasedAlgorithm<any>
              >;
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public constructor(param0: number, param1: number);
              public getClusteringItems(
                param0: com.google.maps.android.quadtree.PointQuadTree<
                  com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>
                >,
                param1: number,
              ): java.util.Collection<
                com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem<any>
              >;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public getClusters(param0: number): java.util.Set<any>;
              public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
              public addItem(param0: any): boolean;
              public unlock(): void;
              public updateViewSize(param0: number, param1: number): void;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public shouldReclusterOnMapMovement(): boolean;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class PreCachingAlgorithmDecorator<T> extends com.google.maps.android.clustering
              .algo.AbstractAlgorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator<any>
              >;
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public constructor(param0: com.google.maps.android.clustering.algo.Algorithm<any>);
              public getClusters(param0: number): java.util.Set<any>;
              public addItem(param0: any): boolean;
              public unlock(): void;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
            export module PreCachingAlgorithmDecorator {
              export class PrecacheRunnable {
                public static class: java.lang.Class<com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator.PrecacheRunnable>;
                public constructor(
                  param0: com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator<any>,
                  param1: number,
                );
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class ScreenBasedAlgorithm<T> extends com.google.maps.android.clustering.algo
              .Algorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                shouldReclusterOnMapMovement(): boolean;
                onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
                addItem(param0: any): boolean;
                addItems(param0: java.util.Collection<any>): boolean;
                clearItems(): void;
                removeItem(param0: any): boolean;
                updateItem(param0: any): boolean;
                removeItems(param0: java.util.Collection<any>): boolean;
                getClusters(param0: number): java.util.Set<any>;
                getItems(): java.util.Collection<any>;
                setMaxDistanceBetweenClusteredItems(param0: number): void;
                getMaxDistanceBetweenClusteredItems(): number;
                lock(): void;
                unlock(): void;
              });
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public getClusters(param0: number): java.util.Set<any>;
              public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
              public addItem(param0: any): boolean;
              public unlock(): void;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public shouldReclusterOnMapMovement(): boolean;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class ScreenBasedAlgorithmAdapter<T>
              extends com.google.maps.android.clustering.algo.AbstractAlgorithm<any>
              implements com.google.maps.android.clustering.algo.ScreenBasedAlgorithm<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.ScreenBasedAlgorithmAdapter<any>
              >;
              public constructor();
              public addItems(param0: java.util.Collection<any>): boolean;
              public setMaxDistanceBetweenClusteredItems(param0: number): void;
              public constructor(param0: com.google.maps.android.clustering.algo.Algorithm<any>);
              public getClusters(param0: number): java.util.Set<any>;
              public addItem(param0: any): boolean;
              public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
              public unlock(): void;
              public removeItem(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
              public clearItems(): void;
              public lock(): void;
              public shouldReclusterOnMapMovement(): boolean;
              public updateItem(param0: any): boolean;
              public getMaxDistanceBetweenClusteredItems(): number;
              public removeItems(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module algo {
            export class StaticCluster<T> extends com.google.maps.android.clustering.Cluster<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.algo.StaticCluster<any>
              >;
              public add(param0: any): boolean;
              public getSize(): number;
              public hashCode(): number;
              public remove(param0: any): boolean;
              public constructor(param0: com.google.android.gms.maps.model.LatLng);
              public getPosition(): com.google.android.gms.maps.model.LatLng;
              public toString(): string;
              public equals(param0: any): boolean;
              public getItems(): java.util.Collection<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module view {
            export class ClusterRenderer<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.view.ClusterRenderer<any>
              >;
              /**
               * Constructs a new instance of the com.google.maps.android.clustering.view.ClusterRenderer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onClustersChanged(param0: java.util.Set<any>): void;
                setOnClusterClickListener(
                  param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>,
                ): void;
                setOnClusterInfoWindowClickListener(
                  param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>,
                ): void;
                setOnClusterInfoWindowLongClickListener(
                  param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>,
                ): void;
                setOnClusterItemClickListener(
                  param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>,
                ): void;
                setOnClusterItemInfoWindowClickListener(
                  param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>,
                ): void;
                setOnClusterItemInfoWindowLongClickListener(
                  param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>,
                ): void;
                setAnimation(param0: boolean): void;
                onAdd(): void;
                onRemove(): void;
              });
              public constructor();
              public setOnClusterItemInfoWindowLongClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<T>,
              ): void;
              public setOnClusterClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<T>,
              ): void;
              public onClustersChanged(param0: java.util.Set<any>): void;
              public setOnClusterInfoWindowLongClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<T>,
              ): void;
              public setOnClusterItemInfoWindowClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<T>,
              ): void;
              public onRemove(): void;
              public setOnClusterInfoWindowClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<T>,
              ): void;
              public setOnClusterItemClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<T>,
              ): void;
              public setAnimation(param0: boolean): void;
              public onAdd(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module clustering {
          export module view {
            export class DefaultClusterRenderer<T> extends com.google.maps.android.clustering.view
              .ClusterRenderer<any> {
              public static class: java.lang.Class<
                com.google.maps.android.clustering.view.DefaultClusterRenderer<any>
              >;
              public onClusterItemUpdated(
                param0: any,
                param1: com.google.android.gms.maps.model.Marker,
              ): void;
              public getClusterText(param0: number): string;
              public getBucket(param0: com.google.maps.android.clustering.Cluster<any>): number;
              public onClustersChanged(param0: java.util.Set<any>): void;
              public setOnClusterItemInfoWindowLongClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener<any>,
              ): void;
              public onClusterRendered(
                param0: com.google.maps.android.clustering.Cluster<any>,
                param1: com.google.android.gms.maps.model.Marker,
              ): void;
              public onClusterUpdated(
                param0: com.google.maps.android.clustering.Cluster<any>,
                param1: com.google.android.gms.maps.model.Marker,
              ): void;
              public setMinClusterSize(param0: number): void;
              public setOnClusterItemClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<any>,
              ): void;
              public getClusterItem(param0: com.google.android.gms.maps.model.Marker): any;
              public getColor(param0: number): number;
              public onBeforeClusterRendered(
                param0: com.google.maps.android.clustering.Cluster<any>,
                param1: com.google.android.gms.maps.model.MarkerOptions,
              ): void;
              public onRemove(): void;
              public setAnimation(param0: boolean): void;
              public getMarker(
                param0: com.google.maps.android.clustering.Cluster<any>,
              ): com.google.android.gms.maps.model.Marker;
              public getDescriptorForCluster(
                param0: com.google.maps.android.clustering.Cluster<any>,
              ): com.google.android.gms.maps.model.BitmapDescriptor;
              public getMinClusterSize(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.maps.GoogleMap,
                param2: com.google.maps.android.clustering.ClusterManager<any>,
              );
              public setOnClusterInfoWindowClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener<any>,
              ): void;
              public setOnClusterClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<any>,
              ): void;
              public onBeforeClusterItemRendered(
                param0: any,
                param1: com.google.android.gms.maps.model.MarkerOptions,
              ): void;
              public setOnClusterInfoWindowLongClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener<any>,
              ): void;
              public onAdd(): void;
              public setOnClusterItemInfoWindowClickListener(
                param0: com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener<any>,
              ): void;
              public getCluster(
                param0: com.google.android.gms.maps.model.Marker,
              ): com.google.maps.android.clustering.Cluster<any>;
              public shouldRenderAsCluster(
                param0: com.google.maps.android.clustering.Cluster<any>,
              ): boolean;
              public onClusterItemRendered(
                param0: any,
                param1: com.google.android.gms.maps.model.Marker,
              ): void;
              public getMarker(param0: any): com.google.android.gms.maps.model.Marker;
            }
            export module DefaultClusterRenderer {
              export class AnimationTask {
                public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.AnimationTask>;
                public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
                public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
                public removeOnAnimationComplete(
                  param0: com.google.maps.android.collections.MarkerManager,
                ): void;
                public perform(): void;
              }
              export class CreateMarkerTask {
                public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.CreateMarkerTask>;
                public constructor(
                  param0: com.google.maps.android.clustering.Cluster<any>,
                  param1: java.util.Set<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition>,
                  param2: com.google.android.gms.maps.model.LatLng,
                );
              }
              export class MarkerCache<T> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerCache<any>
                >;
                public put(param0: T, param1: com.google.android.gms.maps.model.Marker): void;
                public remove(param0: com.google.android.gms.maps.model.Marker): void;
                public get(param0: com.google.android.gms.maps.model.Marker): T;
                public get(param0: T): com.google.android.gms.maps.model.Marker;
              }
              export class MarkerModifier {
                public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerModifier>;
                public animate(
                  param0: com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition,
                  param1: com.google.android.gms.maps.model.LatLng,
                  param2: com.google.android.gms.maps.model.LatLng,
                ): void;
                public animateThenRemove(
                  param0: com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition,
                  param1: com.google.android.gms.maps.model.LatLng,
                  param2: com.google.android.gms.maps.model.LatLng,
                ): void;
                public handleMessage(param0: globalAndroid.os.Message): void;
                public waitUntilFree(): void;
                public add(
                  param0: boolean,
                  param1: com.google.maps.android.clustering.view.DefaultClusterRenderer.CreateMarkerTask,
                ): void;
                public remove(
                  param0: boolean,
                  param1: com.google.android.gms.maps.model.Marker,
                ): void;
                public queueIdle(): boolean;
                public isBusy(): boolean;
              }
              export class MarkerWithPosition {
                public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerWithPosition>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
              export class RenderTask {
                public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.RenderTask>;
                public setMapZoom(param0: number): void;
                public setProjection(param0: com.google.android.gms.maps.Projection): void;
                public setCallback(param0: java.lang.Runnable): void;
                public run(): void;
              }
              export class ViewModifier {
                public static class: java.lang.Class<com.google.maps.android.clustering.view.DefaultClusterRenderer.ViewModifier>;
                public handleMessage(param0: globalAndroid.os.Message): void;
                public queue(param0: java.util.Set<any>): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module collections {
          export class CircleManager
            extends com.google.maps.android.collections.MapObjectManager<
              com.google.android.gms.maps.model.Circle,
              com.google.maps.android.collections.CircleManager.Collection
            >
            implements com.google.android.gms.maps.GoogleMap.OnCircleClickListener {
            public static class: java.lang.Class<com.google.maps.android.collections.CircleManager>;
            public newCollection(): com.google.maps.android.collections.CircleManager.Collection;
            public removeObjectFromMap(param0: com.google.android.gms.maps.model.Circle): void;
            public removeObjectFromMap(param0: any): void;
            public newCollection(param0: string): any;
            public onCircleClick(param0: com.google.android.gms.maps.model.Circle): void;
            public constructor(param0: com.google.android.gms.maps.GoogleMap);
            public newCollection(): any;
          }
          export module CircleManager {
            export class Collection extends com.google.maps.android.collections.MapObjectManager
              .Collection {
              public static class: java.lang.Class<com.google.maps.android.collections.CircleManager.Collection>;
              public setOnCircleClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnCircleClickListener,
              ): void;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.CircleOptions>,
              ): void;
              public remove(param0: any): boolean;
              public showAll(): void;
              public remove(param0: com.google.android.gms.maps.model.Circle): boolean;
              public hideAll(): void;
              public constructor(
                param0: com.google.maps.android.collections.MapObjectManager<any, any>,
              );
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.CircleOptions>,
                param1: boolean,
              ): void;
              public addCircle(
                param0: com.google.android.gms.maps.model.CircleOptions,
              ): com.google.android.gms.maps.model.Circle;
              public constructor(param0: com.google.maps.android.collections.CircleManager);
              public getCircles(): java.util.Collection<com.google.android.gms.maps.model.Circle>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module collections {
          export class GroundOverlayManager
            extends com.google.maps.android.collections.MapObjectManager<
              com.google.android.gms.maps.model.GroundOverlay,
              com.google.maps.android.collections.GroundOverlayManager.Collection
            >
            implements com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener {
            public static class: java.lang.Class<com.google.maps.android.collections.GroundOverlayManager>;
            public newCollection(): com.google.maps.android.collections.GroundOverlayManager.Collection;
            public removeObjectFromMap(param0: any): void;
            public removeObjectFromMap(
              param0: com.google.android.gms.maps.model.GroundOverlay,
            ): void;
            public newCollection(param0: string): any;
            public constructor(param0: com.google.android.gms.maps.GoogleMap);
            public newCollection(): any;
            public onGroundOverlayClick(
              param0: com.google.android.gms.maps.model.GroundOverlay,
            ): void;
          }
          export module GroundOverlayManager {
            export class Collection extends com.google.maps.android.collections.MapObjectManager
              .Collection {
              public static class: java.lang.Class<com.google.maps.android.collections.GroundOverlayManager.Collection>;
              public constructor(param0: com.google.maps.android.collections.GroundOverlayManager);
              public remove(param0: any): boolean;
              public showAll(): void;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.GroundOverlayOptions>,
              ): void;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.GroundOverlayOptions>,
                param1: boolean,
              ): void;
              public hideAll(): void;
              public constructor(
                param0: com.google.maps.android.collections.MapObjectManager<any, any>,
              );
              public setOnGroundOverlayClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener,
              ): void;
              public remove(param0: com.google.android.gms.maps.model.GroundOverlay): boolean;
              public getGroundOverlays(): java.util.Collection<com.google.android.gms.maps.model.GroundOverlay>;
              public addGroundOverlay(
                param0: com.google.android.gms.maps.model.GroundOverlayOptions,
              ): com.google.android.gms.maps.model.GroundOverlay;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module collections {
          export abstract class MapObjectManager<O, C> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.maps.android.collections.MapObjectManager<any, any>
            >;
            public mMap: com.google.android.gms.maps.GoogleMap;
            public mAllObjects: java.util.Map<O, C>;
            public removeObjectFromMap(param0: O): void;
            public newCollection(param0: string): C;
            public newCollection(): C;
            public remove(param0: O): boolean;
            public constructor(param0: com.google.android.gms.maps.GoogleMap);
            public getCollection(param0: string): C;
          }
          export module MapObjectManager {
            export class Collection {
              public static class: java.lang.Class<com.google.maps.android.collections.MapObjectManager.Collection>;
              public add(param0: any): void;
              public getObjects(): java.util.Collection<any>;
              public remove(param0: any): boolean;
              public clear(): void;
              public constructor(
                param0: com.google.maps.android.collections.MapObjectManager<any, any>,
              );
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module collections {
          export class MarkerManager extends com.google.maps.android.collections.MapObjectManager<
            com.google.android.gms.maps.model.Marker,
            com.google.maps.android.collections.MarkerManager.Collection
          > {
            public static class: java.lang.Class<com.google.maps.android.collections.MarkerManager>;
            public onInfoWindowLongClick(param0: com.google.android.gms.maps.model.Marker): void;
            public onMarkerDragStart(param0: com.google.android.gms.maps.model.Marker): void;
            public newCollection(): any;
            public removeObjectFromMap(param0: com.google.android.gms.maps.model.Marker): void;
            public getInfoWindow(
              param0: com.google.android.gms.maps.model.Marker,
            ): globalAndroid.view.View;
            public getInfoContents(
              param0: com.google.android.gms.maps.model.Marker,
            ): globalAndroid.view.View;
            public onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
            public onMarkerDragEnd(param0: com.google.android.gms.maps.model.Marker): void;
            public removeObjectFromMap(param0: any): void;
            public newCollection(param0: string): any;
            public onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
            public constructor(param0: com.google.android.gms.maps.GoogleMap);
            public onMarkerDrag(param0: com.google.android.gms.maps.model.Marker): void;
            public newCollection(): com.google.maps.android.collections.MarkerManager.Collection;
          }
          export module MarkerManager {
            export class Collection extends com.google.maps.android.collections.MapObjectManager
              .Collection {
              public static class: java.lang.Class<com.google.maps.android.collections.MarkerManager.Collection>;
              public constructor(param0: com.google.maps.android.collections.MarkerManager);
              public remove(param0: any): boolean;
              public getMarkers(): java.util.Collection<com.google.android.gms.maps.model.Marker>;
              public showAll(): void;
              public hideAll(): void;
              public constructor(
                param0: com.google.maps.android.collections.MapObjectManager<any, any>,
              );
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.MarkerOptions>,
              ): void;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.MarkerOptions>,
                param1: boolean,
              ): void;
              public setOnInfoWindowClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener,
              ): void;
              public setOnMarkerDragListener(
                param0: com.google.android.gms.maps.GoogleMap.OnMarkerDragListener,
              ): void;
              public setInfoWindowAdapter(
                param0: com.google.android.gms.maps.GoogleMap.InfoWindowAdapter,
              ): void;
              public addMarker(
                param0: com.google.android.gms.maps.model.MarkerOptions,
              ): com.google.android.gms.maps.model.Marker;
              public setOnInfoWindowLongClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener,
              ): void;
              public setOnMarkerClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener,
              ): void;
              public remove(param0: com.google.android.gms.maps.model.Marker): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module collections {
          export class PolygonManager
            extends com.google.maps.android.collections.MapObjectManager<
              com.google.android.gms.maps.model.Polygon,
              com.google.maps.android.collections.PolygonManager.Collection
            >
            implements com.google.android.gms.maps.GoogleMap.OnPolygonClickListener {
            public static class: java.lang.Class<com.google.maps.android.collections.PolygonManager>;
            public newCollection(): com.google.maps.android.collections.PolygonManager.Collection;
            public removeObjectFromMap(param0: any): void;
            public newCollection(param0: string): any;
            public removeObjectFromMap(param0: com.google.android.gms.maps.model.Polygon): void;
            public constructor(param0: com.google.android.gms.maps.GoogleMap);
            public newCollection(): any;
            public onPolygonClick(param0: com.google.android.gms.maps.model.Polygon): void;
          }
          export module PolygonManager {
            export class Collection extends com.google.maps.android.collections.MapObjectManager
              .Collection {
              public static class: java.lang.Class<com.google.maps.android.collections.PolygonManager.Collection>;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.PolygonOptions>,
              ): void;
              public constructor(param0: com.google.maps.android.collections.PolygonManager);
              public addPolygon(
                param0: com.google.android.gms.maps.model.PolygonOptions,
              ): com.google.android.gms.maps.model.Polygon;
              public remove(param0: any): boolean;
              public showAll(): void;
              public setOnPolygonClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener,
              ): void;
              public hideAll(): void;
              public constructor(
                param0: com.google.maps.android.collections.MapObjectManager<any, any>,
              );
              public getPolygons(): java.util.Collection<com.google.android.gms.maps.model.Polygon>;
              public remove(param0: com.google.android.gms.maps.model.Polygon): boolean;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.PolygonOptions>,
                param1: boolean,
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module collections {
          export class PolylineManager
            extends com.google.maps.android.collections.MapObjectManager<
              com.google.android.gms.maps.model.Polyline,
              com.google.maps.android.collections.PolylineManager.Collection
            >
            implements com.google.android.gms.maps.GoogleMap.OnPolylineClickListener {
            public static class: java.lang.Class<com.google.maps.android.collections.PolylineManager>;
            public onPolylineClick(param0: com.google.android.gms.maps.model.Polyline): void;
            public removeObjectFromMap(param0: any): void;
            public removeObjectFromMap(param0: com.google.android.gms.maps.model.Polyline): void;
            public newCollection(param0: string): any;
            public constructor(param0: com.google.android.gms.maps.GoogleMap);
            public newCollection(): any;
            public newCollection(): com.google.maps.android.collections.PolylineManager.Collection;
          }
          export module PolylineManager {
            export class Collection extends com.google.maps.android.collections.MapObjectManager
              .Collection {
              public static class: java.lang.Class<com.google.maps.android.collections.PolylineManager.Collection>;
              public addPolyline(
                param0: com.google.android.gms.maps.model.PolylineOptions,
              ): com.google.android.gms.maps.model.Polyline;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.PolylineOptions>,
                param1: boolean,
              ): void;
              public addAll(
                param0: java.util.Collection<com.google.android.gms.maps.model.PolylineOptions>,
              ): void;
              public constructor(param0: com.google.maps.android.collections.PolylineManager);
              public setOnPolylineClickListener(
                param0: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener,
              ): void;
              public remove(param0: any): boolean;
              public showAll(): void;
              public remove(param0: com.google.android.gms.maps.model.Polyline): boolean;
              public hideAll(): void;
              public getPolylines(): java.util.Collection<com.google.android.gms.maps.model.Polyline>;
              public constructor(
                param0: com.google.maps.android.collections.MapObjectManager<any, any>,
              );
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class DataPolygon<T> extends com.google.maps.android.data.Geometry<any> {
            public static class: java.lang.Class<com.google.maps.android.data.DataPolygon<any>>;
            /**
             * Constructs a new instance of the com.google.maps.android.data.DataPolygon<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              getInnerBoundaryCoordinates(): java.util.List<
                java.util.List<com.google.android.gms.maps.model.LatLng>
              >;
              getGeometryType(): string;
              getGeometryObject(): any;
            });
            public constructor();
            public getInnerBoundaryCoordinates(): java.util.List<
              java.util.List<com.google.android.gms.maps.model.LatLng>
            >;
            public getGeometryType(): string;
            public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
            public getGeometryObject(): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class Feature {
            public static class: java.lang.Class<com.google.maps.android.data.Feature>;
            public mId: string;
            public constructor(
              param0: com.google.maps.android.data.Geometry<any>,
              param1: string,
              param2: java.util.Map<string, string>,
            );
            public hasGeometry(): boolean;
            public getPropertyKeys(): java.lang.Iterable<string>;
            public removeProperty(param0: string): string;
            public setGeometry(param0: com.google.maps.android.data.Geometry<any>): void;
            public hasProperty(param0: string): boolean;
            public getGeometry(): com.google.maps.android.data.Geometry<any>;
            public getProperties(): java.lang.Iterable;
            public getId(): string;
            public getProperty(param0: string): string;
            public hasProperties(): boolean;
            public setProperty(param0: string, param1: string): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class Geometry<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.maps.android.data.Geometry<any>>;
            /**
             * Constructs a new instance of the com.google.maps.android.data.Geometry<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getGeometryType(): string;
              getGeometryObject(): T;
            });
            public constructor();
            public getGeometryType(): string;
            public getGeometryObject(): T;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export abstract class Layer {
            public static class: java.lang.Class<com.google.maps.android.data.Layer>;
            public getFeature(param0: any): com.google.maps.android.data.Feature;
            public getDefaultPolygonStyle(): com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
            public constructor();
            public hasFeatures(): boolean;
            public removeLayerFromMap(): void;
            public hasContainers(): boolean;
            public addKMLToMap(): void;
            public getDefaultPointStyle(): com.google.maps.android.data.geojson.GeoJsonPointStyle;
            public setOnFeatureClickListener(
              param0: com.google.maps.android.data.Layer.OnFeatureClickListener,
            ): void;
            public removeFeature(param0: com.google.maps.android.data.Feature): void;
            public getMap(): com.google.android.gms.maps.GoogleMap;
            public addGeoJsonToMap(): void;
            public addLayerToMap(): void;
            public addFeature(param0: com.google.maps.android.data.Feature): void;
            public getFeatures(): java.lang.Iterable<any>;
            public getDefaultLineStringStyle(): com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
            public storeRenderer(param0: com.google.maps.android.data.Renderer): void;
            public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
            public getContainerFeature(param0: any): com.google.maps.android.data.Feature;
            public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
            public isLayerOnMap(): boolean;
            public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
          }
          export module Layer {
            export class OnFeatureClickListener {
              public static class: java.lang.Class<com.google.maps.android.data.Layer.OnFeatureClickListener>;
              /**
               * Constructs a new instance of the com.google.maps.android.data.Layer$OnFeatureClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onFeatureClick(param0: com.google.maps.android.data.Feature): void;
              });
              public constructor();
              public onFeatureClick(param0: com.google.maps.android.data.Feature): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class LineString extends com.google.maps.android.data.Geometry<
            java.util.List<com.google.android.gms.maps.model.LatLng>
          > {
            public static class: java.lang.Class<com.google.maps.android.data.LineString>;
            public getGeometryType(): string;
            public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
            public toString(): string;
            public getGeometryObject(): any;
            public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class MultiGeometry extends com.google.maps.android.data.Geometry<any> {
            public static class: java.lang.Class<com.google.maps.android.data.MultiGeometry>;
            public constructor(param0: java.util.List<any>);
            public getGeometryType(): string;
            public setGeometryType(param0: string): void;
            public toString(): string;
            public getGeometryObject(): any;
            public getGeometryObject(): java.util.List<com.google.maps.android.data.Geometry<any>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class Point extends com.google.maps.android.data.Geometry<any> {
            public static class: java.lang.Class<com.google.maps.android.data.Point>;
            public constructor(param0: com.google.android.gms.maps.model.LatLng);
            public getGeometryType(): string;
            public getGeometryObject(): com.google.android.gms.maps.model.LatLng;
            public toString(): string;
            public getGeometryObject(): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export class Renderer {
            public static class: java.lang.Class<com.google.maps.android.data.Renderer>;
            public removeFromMap(param0: any): void;
            public hasFeatures(): boolean;
            public clearStylesRenderer(): void;
            public downloadFinished(): void;
            public removeFeature(param0: com.google.maps.android.data.Feature): void;
            public getMap(): com.google.android.gms.maps.GoogleMap;
            public getStylesRenderer(): java.util.HashMap<
              string,
              com.google.maps.android.data.kml.KmlStyle
            >;
            public getGroundOverlayMap(): java.util.HashMap<
              com.google.maps.android.data.kml.KmlGroundOverlay,
              com.google.android.gms.maps.model.GroundOverlay
            >;
            public addFeature(param0: com.google.maps.android.data.Feature): void;
            public addKmlPlacemarkToMap(
              param0: com.google.maps.android.data.kml.KmlPlacemark,
              param1: com.google.maps.android.data.Geometry<any>,
              param2: com.google.maps.android.data.kml.KmlStyle,
              param3: com.google.maps.android.data.kml.KmlStyle,
              param4: boolean,
            ): any;
            public getMarkerIconUrls(): java.util.Set<string>;
            public assignStyleMap(
              param0: java.util.HashMap<string, string>,
              param1: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>,
            ): void;
            public getPlacemarkStyle(param0: string): com.google.maps.android.data.kml.KmlStyle;
            public checkClearBitmapCache(): void;
            public getCachedMarkerImage(
              param0: string,
              param1: number,
            ): com.google.android.gms.maps.model.BitmapDescriptor;
            public putFeatures(param0: com.google.maps.android.data.Feature, param1: any): void;
            public static getPlacemarkVisibility(
              param0: com.google.maps.android.data.Feature,
            ): boolean;
            public constructor(
              param0: com.google.android.gms.maps.GoogleMap,
              param1: globalAndroid.content.Context,
              param2: com.google.maps.android.collections.MarkerManager,
              param3: com.google.maps.android.collections.PolygonManager,
              param4: com.google.maps.android.collections.PolylineManager,
              param5: com.google.maps.android.collections.GroundOverlayManager,
              param6: com.google.maps.android.data.Renderer.ImagesCache,
            );
            public downloadStarted(): void;
            public constructor(
              param0: com.google.android.gms.maps.GoogleMap,
              param1: java.util.HashMap<any, any>,
              param2: com.google.maps.android.collections.MarkerManager,
              param3: com.google.maps.android.collections.PolygonManager,
              param4: com.google.maps.android.collections.PolylineManager,
              param5: com.google.maps.android.collections.GroundOverlayManager,
            );
            public putStyles(): void;
            public getAllFeatures(): java.util.HashMap<any, any>;
            public addGeoJsonFeatureToMap(
              param0: com.google.maps.android.data.Feature,
              param1: com.google.maps.android.data.Geometry<any>,
            ): any;
            public cacheBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
            public getStyleMaps(): java.util.HashMap<string, string>;
            public removeFeatures(param0: java.util.HashMap<any, any>): void;
            public removeGroundOverlays(
              param0: java.util.HashMap<
                com.google.maps.android.data.kml.KmlGroundOverlay,
                com.google.android.gms.maps.model.GroundOverlay
              >,
            ): void;
            public getValues(): java.util.Collection<any>;
            public storeData(
              param0: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>,
              param1: java.util.HashMap<string, string>,
              param2: java.util.HashMap<com.google.maps.android.data.kml.KmlPlacemark, any>,
              param3: java.util.ArrayList<com.google.maps.android.data.kml.KmlContainer>,
              param4: java.util.HashMap<
                com.google.maps.android.data.kml.KmlGroundOverlay,
                com.google.android.gms.maps.model.GroundOverlay
              >,
            ): void;
            public attachGroundOverlay(
              param0: com.google.android.gms.maps.model.GroundOverlayOptions,
            ): com.google.android.gms.maps.model.GroundOverlay;
            public getContainerList(): java.util.ArrayList<com.google.maps.android.data.kml.KmlContainer>;
            public putStyles(
              param0: java.util.HashMap<string, com.google.maps.android.data.kml.KmlStyle>,
            ): void;
            public getFeatures(): java.util.Set<com.google.maps.android.data.Feature>;
            public putContainerFeature(
              param0: any,
              param1: com.google.maps.android.data.Feature,
            ): void;
            public isLayerOnMap(): boolean;
            public setLayerVisibility(param0: boolean): void;
            public getCachedGroundOverlayImage(
              param0: string,
            ): com.google.android.gms.maps.model.BitmapDescriptor;
            public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
          }
          export module Renderer {
            export class ImagesCache {
              public static class: java.lang.Class<com.google.maps.android.data.Renderer.ImagesCache>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export abstract class Style {
            public static class: java.lang.Class<com.google.maps.android.data.Style>;
            public mMarkerOptions: com.google.android.gms.maps.model.MarkerOptions;
            public mPolylineOptions: com.google.android.gms.maps.model.PolylineOptions;
            public mPolygonOptions: com.google.android.gms.maps.model.PolygonOptions;
            public setPolygonStrokeWidth(param0: number): void;
            public constructor();
            public setMarkerHotSpot(
              param0: number,
              param1: number,
              param2: string,
              param3: string,
            ): void;
            public setLineStringWidth(param0: number): void;
            public getRotation(): number;
            public setMarkerRotation(param0: number): void;
            public setPolygonFillColor(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class BiMultiMap<K> extends java.util.HashMap<any, any> {
              public static class: java.lang.Class<
                com.google.maps.android.data.geojson.BiMultiMap<any>
              >;
              public constructor();
              public clone(): com.google.maps.android.data.geojson.BiMultiMap<any>;
              public remove(param0: any): any;
              public getKey(param0: any): any;
              public clear(): void;
              public put(param0: any, param1: any): any;
              public put(param0: any, param1: java.util.Collection): any;
              public putAll(param0: java.util.Map<any, any>): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonFeature extends com.google.maps.android.data.Feature {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonFeature>;
              public getPointStyle(): com.google.maps.android.data.geojson.GeoJsonPointStyle;
              public getBoundingBox(): com.google.android.gms.maps.model.LatLngBounds;
              public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
              public setLineStringStyle(
                param0: com.google.maps.android.data.geojson.GeoJsonLineStringStyle,
              ): void;
              public setPolygonStyle(
                param0: com.google.maps.android.data.geojson.GeoJsonPolygonStyle,
              ): void;
              public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
              public toString(): string;
              public update(param0: java.util.Observable, param1: any): void;
              public setProperty(param0: string, param1: string): string;
              public removeProperty(param0: string): string;
              public constructor(
                param0: com.google.maps.android.data.Geometry<any>,
                param1: string,
                param2: java.util.HashMap<string, string>,
                param3: com.google.android.gms.maps.model.LatLngBounds,
              );
              public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
              public setGeometry(param0: com.google.maps.android.data.Geometry<any>): void;
              public constructor(
                param0: com.google.maps.android.data.Geometry<any>,
                param1: string,
                param2: java.util.Map<string, string>,
              );
              public setPointStyle(
                param0: com.google.maps.android.data.geojson.GeoJsonPointStyle,
              ): void;
              public getPolygonStyle(): com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
              public getLineStringStyle(): com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonGeometryCollection extends com.google.maps.android.data
              .MultiGeometry {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonGeometryCollection>;
              public getGeometryType(): string;
              public getGeometryObject(): java.util.List<
                com.google.maps.android.data.Geometry<any>
              >;
              public constructor(param0: java.util.List<any>);
              public getGeometries(): java.util.List<com.google.maps.android.data.Geometry<any>>;
              public constructor(
                param0: java.util.List<com.google.maps.android.data.Geometry<any>>,
              );
              public getType(): string;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonLayer extends com.google.maps.android.data.Layer {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLayer>;
              public constructor();
              public getBoundingBox(): com.google.android.gms.maps.model.LatLngBounds;
              public removeFeature(
                param0: com.google.maps.android.data.geojson.GeoJsonFeature,
              ): void;
              public addFeature(param0: com.google.maps.android.data.geojson.GeoJsonFeature): void;
              public getFeatures(): java.lang.Iterable<any>;
              public toString(): string;
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: org.json.JSONObject,
                param2: com.google.maps.android.collections.MarkerManager,
                param3: com.google.maps.android.collections.PolygonManager,
                param4: com.google.maps.android.collections.PolylineManager,
                param5: com.google.maps.android.collections.GroundOverlayManager,
              );
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: org.json.JSONObject,
              );
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: number,
                param2: globalAndroid.content.Context,
              );
              public addFeature(param0: com.google.maps.android.data.Feature): void;
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: number,
                param2: globalAndroid.content.Context,
                param3: com.google.maps.android.collections.MarkerManager,
                param4: com.google.maps.android.collections.PolygonManager,
                param5: com.google.maps.android.collections.PolylineManager,
                param6: com.google.maps.android.collections.GroundOverlayManager,
              );
              public getFeatures(): java.lang.Iterable<com.google.maps.android.data.geojson.GeoJsonFeature>;
              public removeFeature(param0: com.google.maps.android.data.Feature): void;
              public addLayerToMap(): void;
            }
            export module GeoJsonLayer {
              export class GeoJsonOnFeatureClickListener extends com.google.maps.android.data.Layer
                .OnFeatureClickListener {
                public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLayer.GeoJsonOnFeatureClickListener>;
                /**
                 * Constructs a new instance of the com.google.maps.android.data.geojson.GeoJsonLayer$GeoJsonOnFeatureClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onFeatureClick(param0: com.google.maps.android.data.Feature): void;
                });
                public constructor();
                public onFeatureClick(param0: com.google.maps.android.data.Feature): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonLineString extends com.google.maps.android.data.LineString {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLineString>;
              public constructor(
                param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
                param1: java.util.List<java.lang.Double>,
              );
              public getGeometryType(): string;
              public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
              public getCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              public getAltitudes(): java.util.List<java.lang.Double>;
              public getType(): string;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonLineStringStyle
              extends com.google.maps.android.data.Style
              implements com.google.maps.android.data.geojson.GeoJsonStyle {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonLineStringStyle>;
              public constructor();
              public getWidth(): number;
              public setGeodesic(param0: boolean): void;
              public setVisible(param0: boolean): void;
              public setClickable(param0: boolean): void;
              public isVisible(): boolean;
              public isClickable(): boolean;
              public toString(): string;
              public getGeometryType(): androidNative.Array<string>;
              public getColor(): number;
              public setZIndex(param0: number): void;
              public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
              public isGeodesic(): boolean;
              public setColor(param0: number): void;
              public setWidth(param0: number): void;
              public getZIndex(): number;
              public setPattern(
                param0: java.util.List<com.google.android.gms.maps.model.PatternItem>,
              ): void;
              public toPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonMultiLineString extends com.google.maps.android.data.MultiGeometry {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonMultiLineString>;
              public getGeometryType(): string;
              public getGeometryObject(): java.util.List<
                com.google.maps.android.data.Geometry<any>
              >;
              public constructor(param0: java.util.List<any>);
              public constructor(
                param0: java.util.List<com.google.maps.android.data.geojson.GeoJsonLineString>,
              );
              public getLineStrings(): java.util.List<com.google.maps.android.data.geojson.GeoJsonLineString>;
              public getType(): string;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonMultiPoint extends com.google.maps.android.data.MultiGeometry {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonMultiPoint>;
              public getGeometryType(): string;
              public getGeometryObject(): java.util.List<
                com.google.maps.android.data.Geometry<any>
              >;
              public constructor(param0: java.util.List<any>);
              public constructor(
                param0: java.util.List<com.google.maps.android.data.geojson.GeoJsonPoint>,
              );
              public getPoints(): java.util.List<com.google.maps.android.data.geojson.GeoJsonPoint>;
              public getType(): string;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonMultiPolygon extends com.google.maps.android.data.MultiGeometry {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonMultiPolygon>;
              public getGeometryType(): string;
              public getGeometryObject(): java.util.List<
                com.google.maps.android.data.Geometry<any>
              >;
              public constructor(param0: java.util.List<any>);
              public constructor(
                param0: java.util.List<com.google.maps.android.data.geojson.GeoJsonPolygon>,
              );
              public getPolygons(): java.util.List<com.google.maps.android.data.geojson.GeoJsonPolygon>;
              public getType(): string;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonParser {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonParser>;
              public getBoundingBox(): com.google.android.gms.maps.model.LatLngBounds;
              public constructor(param0: org.json.JSONObject);
              public getFeatures(): java.util.ArrayList<com.google.maps.android.data.geojson.GeoJsonFeature>;
              public static parseGeometry(
                param0: org.json.JSONObject,
              ): com.google.maps.android.data.Geometry<any>;
            }
            export module GeoJsonParser {
              export class LatLngAlt {
                public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonParser.LatLngAlt>;
                public latLng: com.google.android.gms.maps.model.LatLng;
                public altitude: java.lang.Double;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonPoint extends com.google.maps.android.data.Point {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPoint>;
              public getGeometryType(): string;
              public getAltitude(): java.lang.Double;
              public getGeometryObject(): com.google.android.gms.maps.model.LatLng;
              public constructor(param0: com.google.android.gms.maps.model.LatLng);
              public constructor(
                param0: com.google.android.gms.maps.model.LatLng,
                param1: java.lang.Double,
              );
              public getCoordinates(): com.google.android.gms.maps.model.LatLng;
              public getType(): string;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonPointStyle
              extends com.google.maps.android.data.Style
              implements com.google.maps.android.data.geojson.GeoJsonStyle {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPointStyle>;
              public setDraggable(param0: boolean): void;
              public getAlpha(): number;
              public toString(): string;
              public getGeometryType(): androidNative.Array<string>;
              public setFlat(param0: boolean): void;
              public isDraggable(): boolean;
              public setIcon(param0: com.google.android.gms.maps.model.BitmapDescriptor): void;
              public setAnchor(param0: number, param1: number): void;
              public isFlat(): boolean;
              public getZIndex(): number;
              public setRotation(param0: number): void;
              public constructor();
              public setVisible(param0: boolean): void;
              public getAnchorV(): number;
              public getIcon(): com.google.android.gms.maps.model.BitmapDescriptor;
              public getTitle(): string;
              public isVisible(): boolean;
              public getInfoWindowAnchorV(): number;
              public setInfoWindowAnchor(param0: number, param1: number): void;
              public setSnippet(param0: string): void;
              public getRotation(): number;
              public setZIndex(param0: number): void;
              public getAnchorU(): number;
              public setTitle(param0: string): void;
              public setAlpha(param0: number): void;
              public toMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
              public getSnippet(): string;
              public getInfoWindowAnchorU(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonPolygon extends com.google.maps.android.data.DataPolygon<any> {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPolygon>;
              public getGeometryType(): string;
              public constructor(param0: java.util.List<any>);
              public getOuterBoundaryCoordinates(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
              public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              public getInnerBoundaryCoordinates(): java.util.ArrayList<
                java.util.ArrayList<com.google.android.gms.maps.model.LatLng>
              >;
              public getInnerBoundaryCoordinates(): java.util.List<
                java.util.List<com.google.android.gms.maps.model.LatLng>
              >;
              public getGeometryObject(): java.util.List<any>;
              public toString(): string;
              public getType(): string;
              public getGeometryObject(): any;
              public getCoordinates(): java.util.List<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonPolygonStyle
              extends com.google.maps.android.data.Style
              implements com.google.maps.android.data.geojson.GeoJsonStyle {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonPolygonStyle>;
              public constructor();
              public getStrokeJointType(): number;
              public setGeodesic(param0: boolean): void;
              public setVisible(param0: boolean): void;
              public setStrokeColor(param0: number): void;
              public setClickable(param0: boolean): void;
              public isVisible(): boolean;
              public toString(): string;
              public isClickable(): boolean;
              public getGeometryType(): androidNative.Array<string>;
              public getStrokeColor(): number;
              public setZIndex(param0: number): void;
              public isGeodesic(): boolean;
              public setStrokeJointType(param0: number): void;
              public getStrokeWidth(): number;
              public setStrokePattern(
                param0: java.util.List<com.google.android.gms.maps.model.PatternItem>,
              ): void;
              public setFillColor(param0: number): void;
              public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
              public setStrokeWidth(param0: number): void;
              public toPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
              public getFillColor(): number;
              public getZIndex(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonRenderer extends com.google.maps.android.data.Renderer {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonRenderer>;
              public addFeature(param0: com.google.maps.android.data.Feature): void;
              public removeFeature(
                param0: com.google.maps.android.data.geojson.GeoJsonFeature,
              ): void;
              public removeLayerFromMap(): void;
              public addFeature(param0: com.google.maps.android.data.geojson.GeoJsonFeature): void;
              public removeFeature(param0: com.google.maps.android.data.Feature): void;
              public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
              public update(param0: java.util.Observable, param1: any): void;
              public addLayerToMap(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module geojson {
            export class GeoJsonStyle {
              public static class: java.lang.Class<com.google.maps.android.data.geojson.GeoJsonStyle>;
              /**
               * Constructs a new instance of the com.google.maps.android.data.geojson.GeoJsonStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getGeometryType(): androidNative.Array<string>;
                isVisible(): boolean;
                setVisible(param0: boolean): void;
              });
              public constructor();
              public setVisible(param0: boolean): void;
              public isVisible(): boolean;
              public getGeometryType(): androidNative.Array<string>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlBoolean {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlBoolean>;
              public constructor();
              public static parseBoolean(param0: string): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlContainer {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlContainer>;
              public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
              public hasProperties(): boolean;
              public hasPlacemarks(): boolean;
              public getStyle(param0: string): com.google.maps.android.data.kml.KmlStyle;
              public getProperty(param0: string): string;
              public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
              public toString(): string;
              public hasContainers(): boolean;
              public getProperties(): java.lang.Iterable<string>;
              public getStyleIdFromMap(param0: string): string;
              public getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark>;
              public hasProperty(param0: string): boolean;
              public getContainerId(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlContainerParser {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlContainerParser>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlFeatureParser {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlFeatureParser>;
            }
            export module KmlFeatureParser {
              export class LatLngAlt {
                public static class: java.lang.Class<com.google.maps.android.data.kml.KmlFeatureParser.LatLngAlt>;
                public latLng: com.google.android.gms.maps.model.LatLng;
                public altitude: java.lang.Double;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlGroundOverlay {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlGroundOverlay>;
              public getImageUrl(): string;
              public hasProperty(param0: string): boolean;
              public getProperty(param0: string): string;
              public toString(): string;
              public getLatLngBox(): com.google.android.gms.maps.model.LatLngBounds;
              public getProperties(): java.lang.Iterable<string>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlLayer extends com.google.maps.android.data.Layer {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlLayer>;
              public constructor();
              public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: number,
                param2: globalAndroid.content.Context,
              );
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: java.io.InputStream,
                param2: globalAndroid.content.Context,
                param3: com.google.maps.android.collections.MarkerManager,
                param4: com.google.maps.android.collections.PolygonManager,
                param5: com.google.maps.android.collections.PolylineManager,
                param6: com.google.maps.android.collections.GroundOverlayManager,
                param7: com.google.maps.android.data.Renderer.ImagesCache,
              );
              public hasPlacemarks(): boolean;
              public getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark>;
              public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: java.io.InputStream,
                param2: globalAndroid.content.Context,
              );
              public addLayerToMap(): void;
              public hasContainers(): boolean;
              public constructor(
                param0: com.google.android.gms.maps.GoogleMap,
                param1: number,
                param2: globalAndroid.content.Context,
                param3: com.google.maps.android.collections.MarkerManager,
                param4: com.google.maps.android.collections.PolygonManager,
                param5: com.google.maps.android.collections.PolylineManager,
                param6: com.google.maps.android.collections.GroundOverlayManager,
                param7: com.google.maps.android.data.Renderer.ImagesCache,
              );
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlLineString extends com.google.maps.android.data.LineString {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlLineString>;
              public getGeometryType(): string;
              public constructor(
                param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>,
                param1: java.util.ArrayList<java.lang.Double>,
              );
              public constructor(
                param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>,
              );
              public getGeometryObject(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
              public getAltitudes(): java.util.ArrayList<java.lang.Double>;
              public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
              public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlMultiGeometry extends com.google.maps.android.data.MultiGeometry {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlMultiGeometry>;
              public getGeometryObject(): java.util.List<
                com.google.maps.android.data.Geometry<any>
              >;
              public getGeometryType(): string;
              public constructor(param0: java.util.List<any>);
              public getGeometryObject(): java.util.ArrayList<
                com.google.maps.android.data.Geometry<any>
              >;
              public toString(): string;
              public constructor(
                param0: java.util.ArrayList<com.google.maps.android.data.Geometry<any>>,
              );
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlMultiTrack extends com.google.maps.android.data.kml.KmlMultiGeometry {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlMultiTrack>;
              public getGeometryType(): string;
              public getGeometryObject(): java.util.List<
                com.google.maps.android.data.Geometry<any>
              >;
              public constructor(param0: java.util.List<any>);
              public getGeometryObject(): java.util.ArrayList<
                com.google.maps.android.data.Geometry<any>
              >;
              public constructor(
                param0: java.util.ArrayList<com.google.maps.android.data.kml.KmlTrack>,
              );
              public constructor(
                param0: java.util.ArrayList<com.google.maps.android.data.Geometry<any>>,
              );
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlParser {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlParser>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlPlacemark extends com.google.maps.android.data.Feature {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPlacemark>;
              public getStyleId(): string;
              public constructor(
                param0: com.google.maps.android.data.Geometry<any>,
                param1: string,
                param2: com.google.maps.android.data.kml.KmlStyle,
                param3: java.util.Map<string, string>,
              );
              public constructor(
                param0: com.google.maps.android.data.Geometry<any>,
                param1: string,
                param2: java.util.Map<string, string>,
              );
              public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
              public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
              public toString(): string;
              public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
              public getInlineStyle(): com.google.maps.android.data.kml.KmlStyle;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlPoint extends com.google.maps.android.data.Point {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPoint>;
              public getGeometryType(): string;
              public getAltitude(): java.lang.Double;
              public getGeometryObject(): com.google.android.gms.maps.model.LatLng;
              public constructor(param0: com.google.android.gms.maps.model.LatLng);
              public constructor(
                param0: com.google.android.gms.maps.model.LatLng,
                param1: java.lang.Double,
              );
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlPolygon extends com.google.maps.android.data.DataPolygon<
              java.util.ArrayList<java.util.ArrayList<com.google.android.gms.maps.model.LatLng>>
            > {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlPolygon>;
              public static GEOMETRY_TYPE: string;
              public getGeometryType(): string;
              public getOuterBoundaryCoordinates(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              public constructor(
                param0: java.util.List<com.google.android.gms.maps.model.LatLng>,
                param1: java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>,
              );
              public getInnerBoundaryCoordinates(): java.util.List<
                java.util.List<com.google.android.gms.maps.model.LatLng>
              >;
              public toString(): string;
              public getGeometryObject(): java.util.List<
                java.util.List<com.google.android.gms.maps.model.LatLng>
              >;
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlRenderer extends com.google.maps.android.data.Renderer {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer>;
              public removeLayerFromMap(): void;
              public hasNestedContainers(): boolean;
              public setMap(param0: com.google.android.gms.maps.GoogleMap): void;
              public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
              public getNestedContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
              public addLayerToMap(): void;
            }
            export module KmlRenderer {
              export class GroundOverlayImageDownload extends globalAndroid.os.AsyncTask<
                string,
                java.lang.Void,
                globalAndroid.graphics.Bitmap
              > {
                public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer.GroundOverlayImageDownload>;
                public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
                public constructor(
                  param0: com.google.maps.android.data.kml.KmlRenderer,
                  param1: string,
                );
                public doInBackground(
                  param0: androidNative.Array<string>,
                ): globalAndroid.graphics.Bitmap;
              }
              export class MarkerIconImageDownload extends globalAndroid.os.AsyncTask<
                string,
                java.lang.Void,
                globalAndroid.graphics.Bitmap
              > {
                public static class: java.lang.Class<com.google.maps.android.data.kml.KmlRenderer.MarkerIconImageDownload>;
                public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
                public constructor(
                  param0: com.google.maps.android.data.kml.KmlRenderer,
                  param1: string,
                );
                public doInBackground(
                  param0: androidNative.Array<string>,
                ): globalAndroid.graphics.Bitmap;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlStyle extends com.google.maps.android.data.Style {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlStyle>;
              public hasOutline(): boolean;
              public getBalloonOptions(): java.util.HashMap<string, string>;
              public static computeRandomColor(param0: number): number;
              public getPolylineOptions(): com.google.android.gms.maps.model.PolylineOptions;
              public getPolygonOptions(): com.google.android.gms.maps.model.PolygonOptions;
              public toString(): string;
              public hasBalloonStyle(): boolean;
              public isLineRandomColorMode(): boolean;
              public getMarkerOptions(): com.google.android.gms.maps.model.MarkerOptions;
              public getIconUrl(): string;
              public isStyleSet(param0: string): boolean;
              public setFill(param0: boolean): void;
              public hasFill(): boolean;
              public isPolyRandomColorMode(): boolean;
              public getIconScale(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlStyleParser {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlStyleParser>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlTrack extends com.google.maps.android.data.kml.KmlLineString {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlTrack>;
              public getGeometryType(): string;
              public constructor(
                param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>,
                param1: java.util.ArrayList<java.lang.Double>,
              );
              public getTimestamps(): java.util.ArrayList<java.lang.Long>;
              public constructor(
                param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>,
              );
              public getProperties(): java.util.HashMap<string, string>;
              public getGeometryObject(): java.util.ArrayList<com.google.android.gms.maps.model.LatLng>;
              public constructor(param0: java.util.List<com.google.android.gms.maps.model.LatLng>);
              public getGeometryObject(): java.util.List<com.google.android.gms.maps.model.LatLng>;
              public constructor(
                param0: java.util.ArrayList<com.google.android.gms.maps.model.LatLng>,
                param1: java.util.ArrayList<java.lang.Double>,
                param2: java.util.ArrayList<java.lang.Long>,
                param3: java.util.HashMap<string, string>,
              );
              public getGeometryObject(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module data {
          export module kml {
            export class KmlUtil {
              public static class: java.lang.Class<com.google.maps.android.data.kml.KmlUtil>;
              public constructor();
              public static substituteProperties(
                param0: string,
                param1: com.google.maps.android.data.kml.KmlPlacemark,
              ): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module geometry {
          export class Bounds {
            public static class: java.lang.Class<com.google.maps.android.geometry.Bounds>;
            public minX: number;
            public minY: number;
            public maxX: number;
            public maxY: number;
            public midX: number;
            public midY: number;
            public contains(param0: number, param1: number): boolean;
            public contains(param0: com.google.maps.android.geometry.Bounds): boolean;
            public contains(param0: com.google.maps.android.geometry.Point): boolean;
            public intersects(
              param0: number,
              param1: number,
              param2: number,
              param3: number,
            ): boolean;
            public intersects(param0: com.google.maps.android.geometry.Bounds): boolean;
            public constructor(param0: number, param1: number, param2: number, param3: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module geometry {
          export class Point {
            public static class: java.lang.Class<com.google.maps.android.geometry.Point>;
            public x: number;
            public y: number;
            public constructor(param0: number, param1: number);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module heatmaps {
          export class Gradient {
            public static class: java.lang.Class<com.google.maps.android.heatmaps.Gradient>;
            public mColorMapSize: number;
            public mColors: androidNative.Array<number>;
            public mStartPoints: androidNative.Array<number>;
            public constructor(
              param0: androidNative.Array<number>,
              param1: androidNative.Array<number>,
            );
            public constructor(
              param0: androidNative.Array<number>,
              param1: androidNative.Array<number>,
              param2: number,
            );
          }
          export module Gradient {
            export class ColorInterval {
              public static class: java.lang.Class<com.google.maps.android.heatmaps.Gradient.ColorInterval>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module heatmaps {
          export class HeatmapTileProvider {
            public static class: java.lang.Class<com.google.maps.android.heatmaps.HeatmapTileProvider>;
            public static DEFAULT_RADIUS: number;
            public static DEFAULT_OPACITY: number;
            public static DEFAULT_GRADIENT: com.google.maps.android.heatmaps.Gradient;
            public setOpacity(param0: number): void;
            public setWeightedData(
              param0: java.util.Collection<com.google.maps.android.heatmaps.WeightedLatLng>,
            ): void;
            public setGradient(param0: com.google.maps.android.heatmaps.Gradient): void;
            public setRadius(param0: number): void;
            public setMaxIntensity(param0: number): void;
            public setData(
              param0: java.util.Collection<com.google.android.gms.maps.model.LatLng>,
            ): void;
            public getTile(
              param0: number,
              param1: number,
              param2: number,
            ): com.google.android.gms.maps.model.Tile;
          }
          export module HeatmapTileProvider {
            export class Builder {
              public static class: java.lang.Class<com.google.maps.android.heatmaps.HeatmapTileProvider.Builder>;
              public constructor();
              public gradient(
                param0: com.google.maps.android.heatmaps.Gradient,
              ): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
              public opacity(
                param0: number,
              ): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
              public weightedData(
                param0: java.util.Collection<com.google.maps.android.heatmaps.WeightedLatLng>,
              ): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
              public radius(
                param0: number,
              ): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
              public data(
                param0: java.util.Collection<com.google.android.gms.maps.model.LatLng>,
              ): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
              public maxIntensity(
                param0: number,
              ): com.google.maps.android.heatmaps.HeatmapTileProvider.Builder;
              public build(): com.google.maps.android.heatmaps.HeatmapTileProvider;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module heatmaps {
          export class WeightedLatLng extends com.google.maps.android.quadtree.PointQuadTree.Item {
            public static class: java.lang.Class<com.google.maps.android.heatmaps.WeightedLatLng>;
            public static DEFAULT_INTENSITY: number;
            public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: number);
            public getPoint(): com.google.maps.android.geometry.Point;
            public constructor(param0: com.google.android.gms.maps.model.LatLng);
            public getIntensity(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module lint {
          export module checks {
            export class GoogleMapDetector {
              public static class: java.lang.Class<com.google.maps.android.lint.checks.GoogleMapDetector>;
              public static Companion: com.google.maps.android.lint.checks.GoogleMapDetector.Companion;
              public constructor();
              public visitMethodCall(
                param0: com.android.tools.lint.detector.api.JavaContext,
                param1: org.jetbrains.uast.UCallExpression,
                param2: com.intellij.psi.PsiMethod,
              ): void;
              public getApplicableMethodNames(): java.util.List<string>;
            }
            export module GoogleMapDetector {
              export class Companion {
                public static class: java.lang.Class<com.google.maps.android.lint.checks.GoogleMapDetector.Companion>;
                public getPOTENTIAL_BEHAVIOR_OVERRIDE(): com.android.tools.lint.detector.api.Issue;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module lint {
          export module checks {
            export class MapsUtilsIssueRegistry {
              public static class: java.lang.Class<com.google.maps.android.lint.checks.MapsUtilsIssueRegistry>;
              public constructor();
              public getMinApi(): number;
              public getIssues(): java.util.List<com.android.tools.lint.detector.api.Issue>;
              public getApi(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module projection {
          export class Point extends com.google.maps.android.geometry.Point {
            public static class: java.lang.Class<com.google.maps.android.projection.Point>;
            public constructor(param0: number, param1: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module projection {
          export class SphericalMercatorProjection {
            public static class: java.lang.Class<com.google.maps.android.projection.SphericalMercatorProjection>;
            public toPoint(
              param0: com.google.android.gms.maps.model.LatLng,
            ): com.google.maps.android.projection.Point;
            public constructor(param0: number);
            public toLatLng(
              param0: com.google.maps.android.geometry.Point,
            ): com.google.android.gms.maps.model.LatLng;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module quadtree {
          export class PointQuadTree<T> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.maps.android.quadtree.PointQuadTree<any>
            >;
            public search(param0: com.google.maps.android.geometry.Bounds): java.util.Collection<T>;
            public constructor(param0: com.google.maps.android.geometry.Bounds);
            public add(param0: T): void;
            public clear(): void;
            public remove(param0: T): boolean;
            public constructor(param0: number, param1: number, param2: number, param3: number);
          }
          export module PointQuadTree {
            export class Item {
              public static class: java.lang.Class<com.google.maps.android.quadtree.PointQuadTree.Item>;
              /**
               * Constructs a new instance of the com.google.maps.android.quadtree.PointQuadTree$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getPoint(): com.google.maps.android.geometry.Point;
              });
              public constructor();
              public getPoint(): com.google.maps.android.geometry.Point;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module ui {
          export class BubbleDrawable {
            public static class: java.lang.Class<com.google.maps.android.ui.BubbleDrawable>;
            public constructor(param0: globalAndroid.content.Context);
            public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
            public draw(param0: globalAndroid.graphics.Canvas): void;
            public setBounds(param0: globalAndroid.graphics.Rect): void;
            public setBounds(param0: number, param1: number, param2: number, param3: number): void;
            public getPadding(param0: globalAndroid.graphics.Rect): boolean;
            public setColor(param0: number): void;
            public getOpacity(): number;
            public setAlpha(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module ui {
          export class BubbleIconFactory {
            public static class: java.lang.Class<com.google.maps.android.ui.BubbleIconFactory>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module ui {
          export class IconGenerator {
            public static class: java.lang.Class<com.google.maps.android.ui.IconGenerator>;
            public static STYLE_DEFAULT: number;
            public static STYLE_WHITE: number;
            public static STYLE_RED: number;
            public static STYLE_BLUE: number;
            public static STYLE_GREEN: number;
            public static STYLE_PURPLE: number;
            public static STYLE_ORANGE: number;
            public constructor(param0: globalAndroid.content.Context);
            public setColor(param0: number): void;
            public setTextAppearance(param0: number): void;
            public getAnchorU(): number;
            public makeIcon(): globalAndroid.graphics.Bitmap;
            public makeIcon(param0: string): globalAndroid.graphics.Bitmap;
            public setContentRotation(param0: number): void;
            public setContentPadding(
              param0: number,
              param1: number,
              param2: number,
              param3: number,
            ): void;
            public setRotation(param0: number): void;
            public setStyle(param0: number): void;
            public setContentView(param0: globalAndroid.view.View): void;
            public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
            public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
            public getAnchorV(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module ui {
          export class RotationLayout {
            public static class: java.lang.Class<com.google.maps.android.ui.RotationLayout>;
            public constructor(param0: globalAndroid.content.Context);
            public setViewRotation(param0: number): void;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.util.AttributeSet,
              param2: number,
            );
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.util.AttributeSet,
            );
            public onMeasure(param0: number, param1: number): void;
            public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module maps {
      export module android {
        export module ui {
          export class SquareTextView {
            public static class: java.lang.Class<com.google.maps.android.ui.SquareTextView>;
            public constructor(param0: globalAndroid.content.Context);
            public draw(param0: globalAndroid.graphics.Canvas): void;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.util.AttributeSet,
              param2: number,
            );
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.util.AttributeSet,
            );
            public onMeasure(param0: number, param1: number): void;
          }
        }
      }
    }
  }
}

//Generics information:
//com.google.maps.android.clustering.Cluster:1
//com.google.maps.android.clustering.ClusterManager:1
//com.google.maps.android.clustering.ClusterManager.OnClusterClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterInfoWindowLongClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowClickListener:1
//com.google.maps.android.clustering.ClusterManager.OnClusterItemInfoWindowLongClickListener:1
//com.google.maps.android.clustering.algo.AbstractAlgorithm:1
//com.google.maps.android.clustering.algo.Algorithm:1
//com.google.maps.android.clustering.algo.GridBasedAlgorithm:1
//com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm:1
//com.google.maps.android.clustering.algo.NonHierarchicalDistanceBasedAlgorithm.QuadItem:1
//com.google.maps.android.clustering.algo.NonHierarchicalViewBasedAlgorithm:1
//com.google.maps.android.clustering.algo.PreCachingAlgorithmDecorator:1
//com.google.maps.android.clustering.algo.ScreenBasedAlgorithm:1
//com.google.maps.android.clustering.algo.ScreenBasedAlgorithmAdapter:1
//com.google.maps.android.clustering.algo.StaticCluster:1
//com.google.maps.android.clustering.view.ClusterRenderer:1
//com.google.maps.android.clustering.view.DefaultClusterRenderer:1
//com.google.maps.android.clustering.view.DefaultClusterRenderer.MarkerCache:1
//com.google.maps.android.collections.MapObjectManager:2
//com.google.maps.android.data.DataPolygon:1
//com.google.maps.android.data.Geometry:1
//com.google.maps.android.data.geojson.BiMultiMap:1
//com.google.maps.android.quadtree.PointQuadTree:1
