# Modelo a seguir del año

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Interpretación  del contenido            :done,    des1, 2014-01-01,2014-01-07
    Evaljuación del contenido, en modo multiplechoise               :active,  des2, 2014-01-01,2014-01-07
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    Functionality added                 :milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
```

## formula
H^2+Fe----H2Fe
![](https://latex.codecogs.com/gif.latex?%5Cce%7BFe%5E4&plus;%7D%20&plus;%20%5Cce%7BH%7D%20%5Clongrightarrow%20%5Cce%7BH4Fe%7D%20%5C%5C)

| hola | mubdo |
| ---- | ----- |
| ghfghfghfhggfhg | gjhghjgjhg |
| jljlkjlkj | hjkhkjhhkj |